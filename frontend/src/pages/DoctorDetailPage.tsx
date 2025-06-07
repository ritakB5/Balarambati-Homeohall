import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const demoDoctors = [
  {
    id: '1',
    name: 'Amit Roy',
    specialization: 'Homeopathic Physician',
    experience: '12 years',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Dr. Amit Roy is an experienced homeopathic physician with a passion for holistic healing. He specializes in chronic illness management and patient education.'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    specialization: 'Child Specialist',
    experience: '8 years',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Dr. Priya Sharma is a child specialist focusing on pediatric homeopathy and allergy management. She is known for her caring approach with children.'
  },
  {
    id: '3',
    name: 'Rakesh Gupta',
    specialization: 'Chronic Disease Expert',
    experience: '15 years',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    bio: 'Dr. Rakesh Gupta has over 15 years of experience treating chronic and lifestyle diseases using homeopathy.'
  },
  {
    id: '4',
    name: 'Sneha Das',
    specialization: 'Skin & Allergy Specialist',
    experience: '10 years',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Dr. Sneha Das specializes in skin and allergy treatments, helping patients achieve long-term relief with natural remedies.'
  },
];

const DoctorDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = demoDoctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Doctor Not Found</h2>
          <Button onClick={() => navigate('/doctors')}>Back to Doctors</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-homeo-green-light/10 to-homeo-blue/10">
        <div className="max-w-2xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center">
          <img src={doctor.image} alt={doctor.name} className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 border-4 border-homeo-green-light" />
          <h2 className="text-3xl font-bold text-homeo-green-dark mb-2">Dr. {doctor.name}</h2>
          <div className="text-lg text-gray-700 mb-2">{doctor.specialization}</div>
          <div className="text-sm text-gray-500 mb-4">{doctor.experience} of experience</div>
          <p className="text-gray-600 mb-8 text-center">{doctor.bio}</p>
          <Button
            className="mt-4 bg-homeo-blue text-white hover:bg-homeo-green-dark transition-colors duration-300"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Contact Us for Book Appointment
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorDetailPage;
