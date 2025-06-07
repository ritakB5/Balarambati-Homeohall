import React from 'react';

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Dr. {name}</h3>
        <p className="text-sm text-gray-600 mb-2">{specialization}</p>
        <p className="text-xs text-gray-500 mb-4">{experience} of experience</p>

      </div>
    </div>
  );
};

export default DoctorCard;
