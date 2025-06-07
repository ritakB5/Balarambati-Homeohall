import React from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '@/components/doctors/DoctorCard';
import Layout from '@/components/layout/Layout';

const demoDoctors = [
  {
    id: '1',
    name: 'Amit Roy',
    specialization: 'Homeopathic Physician',
    experience: '12 years',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    specialization: 'Child Specialist',
    experience: '8 years',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '3',
    name: 'Rakesh Gupta',
    specialization: 'Chronic Disease Expert',
    experience: '15 years',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    id: '4',
    name: 'Sneha Das',
    specialization: 'Skin & Allergy Specialist',
    experience: '10 years',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const DoctorsPage: React.FC = () => {
  return (
    <Layout>
      <section className="relative py-16 min-h-[80vh] overflow-hidden">
        {/* Animated 3D gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-tr from-homeo-green-light/60 via-white via-40% to-homeo-blue/40 animate-gradient-move blur-2xl opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-homeo-green-dark drop-shadow-lg">Our Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 perspective-3d">
            {demoDoctors.map((doc) => (
              <Link
                key={doc.id}
                to={`/doctors/${doc.id}`}
                className="block focus:outline-none"
              >
                <div
                  className="group [transform-style:preserve-3d] transition-transform duration-500 hover:rotate-y-6 hover:-rotate-x-3 hover:scale-105 hover:z-20 relative"
                  style={{ perspective: '1200px' }}
                >
                  <div className="relative rounded-2xl bg-white shadow-2xl border-2 border-transparent group-hover:border-homeo-green-dark group-hover:shadow-[0_8px_32px_rgba(34,197,94,0.18),0_1.5px_12px_rgba(59,130,246,0.13)] transition-all duration-500">
                    <DoctorCard
                      name={doc.name}
                      specialization={doc.specialization}
                      experience={doc.experience}
                      image={doc.image}
                    />
                    {/* Glowing border effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-homeo-blue group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.15)] transition-all duration-500"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorsPage;
