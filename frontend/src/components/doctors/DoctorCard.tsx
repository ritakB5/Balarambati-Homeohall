
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, ArrowRight, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Doctor {
  id: string;
  _id?: string; // For backend compatibility
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  image?: string;
  bio: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  minimal?: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, minimal }) => {
  if (minimal) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Card className="hover:shadow-md transition-all duration-300 border border-gray-100">
          <div className="flex items-center p-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-homeo-green-light/30 shadow-sm">
              {doctor.image ? (
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-homeo-green-light/20 flex items-center justify-center">
                  <User className="h-8 w-8 text-homeo-green-dark/60" />
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-lg text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-homeo-green-dark font-medium">{doctor.specialty}</p>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="h-full"
    >
      <Card className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100 group">
        <div className="h-56 overflow-hidden relative">
          {doctor.image ? (
            <img 
              src={doctor.image} 
              alt={doctor.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-homeo-green-light/30 to-homeo-blue/20 flex items-center justify-center">
              <User className="h-16 w-16 text-homeo-green-dark/60" />
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Experience badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-homeo-green-dark shadow-sm flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {doctor.experience}
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-homeo-green-dark text-xl flex items-center justify-between">
            {doctor.name}
            <span className="w-8 h-8 rounded-full bg-homeo-green-light/10 flex items-center justify-center text-homeo-green-dark group-hover:bg-homeo-green-dark group-hover:text-white transition-colors duration-300">
              <ArrowRight className="h-4 w-4" />
            </span>
          </CardTitle>
          <CardDescription className="font-medium text-homeo-blue">{doctor.specialty}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 pb-3">
          <div className="flex items-center mb-3 text-sm">
            <div className="bg-homeo-green-light/10 p-1 rounded-full mr-2">
              <Award className="h-4 w-4 text-homeo-green-dark" />
            </div>
            <span>{doctor.qualification}</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-3">{doctor.bio}</p>
        </CardContent>
        
        <CardFooter className="border-t pt-4 bg-gray-50/50">
          <div className="flex justify-between w-full">
            <Button 
              variant="outline" 
              className="border-homeo-green-dark text-homeo-green-dark hover:bg-homeo-green-dark hover:text-white transition-colors duration-300" 
              asChild
            >
              <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
            </Button>
            
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;
