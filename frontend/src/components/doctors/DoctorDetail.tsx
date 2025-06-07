
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, User } from 'lucide-react';
import { Doctor } from './DoctorCard';
import DoctorSchedule from './DoctorSchedule';

interface DoctorDetailProps {
  doctors: Doctor[];
}

const DoctorDetail: React.FC<DoctorDetailProps> = ({ doctors }) => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find(doc => doc.id === id);
  
  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-homeo-green-dark mb-4">Doctor not found</h2>
        <p className="mb-6">The doctor you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/doctors">View All Doctors</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="rounded-lg overflow-hidden mb-6 shadow-md">
              <img 
                src={doctor.image || "/placeholder.svg"} 
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h1 className="text-2xl font-bold text-homeo-green-dark mb-2">{doctor.name}</h1>
              <p className="text-lg text-homeo-blue mb-4">{doctor.specialty}</p>
              
              <div className="space-y-3 mb-6">
                <div>
                  <p className="font-medium">Qualification</p>
                  <p className="text-gray-600">{doctor.qualification}</p>
                </div>
                <div>
                  <p className="font-medium">Experience</p>
                  <p className="text-gray-600">{doctor.experience}</p>
                </div>
              </div>
              
              <Button className="w-full bg-homeo-green-dark hover:bg-homeo-blue" asChild>
                <Link to={`/appointments/book?doctor=${doctor.id}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about" className="text-base">
                <User className="mr-2 h-4 w-4" />
                About
              </TabsTrigger>
              <TabsTrigger value="schedule" className="text-base">
                <Clock className="mr-2 h-4 w-4" />
                Schedule
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">About Dr. {doctor.name}</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{doctor.bio}</p>
                <p>
                  Dr. {doctor.name.split(' ')[0]} specializes in {doctor.specialty} and has {doctor.experience} years of experience in homeopathic treatments. 
                  Using natural remedies and a holistic approach, they focus on treating the root cause of illness rather than just the symptoms.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Consultation Hours</h2>
              <DoctorSchedule doctorId={doctor.id} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
