import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, User, Search, ChevronRight, Heart, Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import DoctorCard from '@/components/doctors/DoctorCard';
import { motion } from 'framer-motion';


const treatments = [
  { name: 'Digestive Disorders', icon: '🍃', description: 'Natural remedies for IBS, GERD, and other digestive issues' },
  { name: 'Skin Conditions', icon: '🌿', description: 'Effective treatments for eczema, psoriasis, and acne' },
  { name: 'Allergies', icon: '🌼', description: 'Relief from seasonal allergies and food sensitivities' },
  { name: 'Respiratory Issues', icon: '🫁', description: 'Support for asthma, bronchitis, and respiratory health' },
  { name: 'Women\'s Health', icon: '💝', description: 'Care for hormonal balance, PCOS, and menstrual issues' },
  { name: 'Chronic Pain', icon: '💧', description: 'Management of arthritis, fibromyalgia, and chronic pain' },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage: React.FC = () => {
  // TODO: Replace this with real data fetching logic or props
  const doctors: import('@/components/doctors/DoctorCard').Doctor[] = [];
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-homeo-green-light/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-homeo-blue/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 bg-homeo-green-light/20 rounded-full text-homeo-green-dark font-medium text-sm mb-6">
                Holistic Care for Complete Wellness
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-homeo-green-dark to-homeo-blue bg-clip-text text-transparent mb-6">
                Natural Healing Through Homeopathy
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At Balarambati HomeoHall, we believe in the body's natural ability to heal itself. Our experienced doctors provide personalized homeopathic treatments for lasting results without side effects.
              </p>
              
              <div className="flex flex-wrap gap-4">
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-homeo-green-dark text-homeo-green-dark hover:bg-homeo-green-dark hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link to="/doctors">Meet Our Doctors</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span>100% Natural Remedies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Certified Practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-homeo-green-light/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-homeo-blue/20 rounded-full blur-xl"></div>
                
                {/* Main image with frame */}
                <div className="relative p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/src/istockphoto-814351018-612x612.jpg"
                    alt="Homeopathic Treatment"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                  
                  {/* Floating badge */}
                  <motion.div 
                    className="absolute top-8 -right-4 bg-white px-4 py-3 rounded-lg shadow-lg flex items-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-800 font-medium text-sm">4.9/5 Patient Rating</span>
                    </div>
                  </motion.div>
                  
                  {/* Floating card at bottom */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-lg shadow-lg"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-homeo-green-light/30 p-2 rounded-full">
                        <Heart className="h-5 w-5 text-homeo-green-dark" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Happy Patients</p>
                        <p className="font-semibold text-homeo-green-dark">5000+</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-4">
              Our Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-homeo-green-dark">Balarambati HomeoHall</span>?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We combine traditional homeopathic principles with modern healthcare practices to provide you with the most effective natural treatment options.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 relative overflow-hidden group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-homeo-green-light/10 rounded-full -translate-x-1/4 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="mb-6 relative">
                <div className="bg-homeo-green-dark w-14 h-14 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <User className="h-7 w-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative">Experienced Doctors</h3>
              <p className="text-gray-600 relative z-10 mb-4">
                Our team of certified homeopathic doctors brings years of clinical experience and personalized care to every consultation.
              </p>
              
              <Link to="/doctors" className="inline-flex items-center text-homeo-green-dark font-medium group-hover:underline">
                Meet Our Doctors <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 relative overflow-hidden group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-homeo-blue/10 rounded-full -translate-x-1/4 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="mb-6 relative">
                <div className="bg-homeo-blue w-14 h-14 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <CalendarClock className="h-7 w-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative">Convenient Booking</h3>
              <p className="text-gray-600 relative z-10 mb-4">
                Book your appointments online with our easy scheduling system and receive timely reminders for your consultations.
              </p>
              
              <Link to="/appointments/book" className="inline-flex items-center text-homeo-blue font-medium group-hover:underline">
                Book Appointment <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 relative overflow-hidden group"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-homeo-green-light/10 rounded-full -translate-x-1/4 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="mb-6 relative">
                <div className="bg-homeo-green-dark w-14 h-14 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-7 w-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative">Holistic Approach</h3>
              <p className="text-gray-600 relative z-10 mb-4">
                We identify and treat the root cause of your health issues rather than just addressing the symptoms for lasting wellness.
              </p>
              
              <Link to="/treatments" className="inline-flex items-center text-homeo-green-dark font-medium group-hover:underline">
                Our Treatments <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Statistics */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5000+', label: 'Happy Patients' },
              { value: '10+', label: 'Expert Doctors' },
              { value: '25+', label: 'Treatment Types' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-homeo-green-dark">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-homeo-green-light/10 blur-3xl"></div>
        <div className="absolute top-32 -left-24 w-64 h-64 rounded-full bg-homeo-blue/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-y-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-3">
                Expert Healthcare
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-homeo-green-dark">Specialists</span>
              </h2>
            </div>
            <Button 
              variant="outline" 
              className="border-homeo-green-dark text-homeo-green-dark hover:bg-homeo-green-dark hover:text-white transition-all duration-300 group"
              asChild
            >
              <Link to="/doctors" className="flex items-center">
                View All Doctors
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {doctors.length > 0 ? (
              doctors.map((doctor: import('@/components/doctors/DoctorCard').Doctor) => (
                <motion.div 
                  key={doctor.id}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                >
                  <DoctorCard doctor={doctor} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center text-gray-500 py-12 bg-gray-50/50 rounded-xl border border-gray-100"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center">
                  <User className="h-12 w-12 text-gray-300 mb-3" />
                  <p>No doctors found at the moment.</p>
                  <p className="text-sm mt-2">Please check back later or contact us for assistance.</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-homeo-green-light/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-homeo-blue/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-4">
              Homeopathic Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-homeo-green-dark">Treatments</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Balarambati HomeoHall provides effective homeopathic treatments for a wide range of health conditions,
              addressing the root cause for lasting wellness.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            {treatments.map((treatment, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100 overflow-hidden group"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-homeo-green-light/20 rounded-lg text-4xl group-hover:scale-110 transition-transform duration-300">
                      {treatment.icon}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-homeo-green-light/10 flex items-center justify-center text-homeo-green-dark group-hover:bg-homeo-green-dark group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 text-sm">{treatment.description}</p>
                </div>
                
                <div className="mt-2 border-t border-gray-100 bg-gray-50/50 px-6 py-3">
                  <Link 
                    to={`/treatments#${treatment.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-homeo-green-dark font-medium hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-14 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              className="bg-homeo-blue hover:bg-homeo-green-dark transition-colors duration-300 group" 
              size="lg"
              asChild
            >
              <Link to="/treatments" className="flex items-center">
                Explore All Treatments
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-homeo-green-dark to-homeo-blue z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your Journey to Natural Healing Today
            </h2>
            <p className="text-lg md:text-xl text-gray-100 opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Schedule a consultation with our experienced homeopathic doctors and take the first step towards a healthier, balanced life without side effects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button 
                size="lg" 
                className="bg-white text-homeo-green-dark hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                asChild
              >
                <Link to="/appointments/book" className="flex items-center px-8">
                  <CalendarClock className="mr-2 h-5 w-5" />
                  Book Your Appointment
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <Link to="/contact" className="px-8">
                  Contact Us
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4">
              <div className="flex items-center gap-2 text-white/80">
                <Check className="h-5 w-5 text-white" />
                <span>No appointment fee</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Check className="h-5 w-5 text-white" />
                <span>Personalized care plan</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Check className="h-5 w-5 text-white" />
                <span>24/7 support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
