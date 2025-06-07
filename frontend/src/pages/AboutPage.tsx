
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Heart, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section with decorative elements */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-white to-gray-50">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-homeo-green-light/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 rounded-full bg-homeo-blue/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 bg-homeo-green-light/20 rounded-full text-homeo-green-dark font-medium text-sm mb-6">
              Established 2005
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-homeo-green-dark">Balarambati HomeoHall</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Committed to providing natural healing through holistic homeopathic treatments for nearly two decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div 
              className="flex flex-col justify-center"
              variants={fadeIn}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Balarambati HomeoHall was established with a vision to bring the benefits of homeopathic medicine to our community. Our journey began with a small clinic and has now grown into a trusted healthcare provider specializing in natural remedies.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We believe in treating the root cause of illnesses rather than just the symptoms. Our approach combines traditional homeopathic principles with modern healthcare practices to provide comprehensive care for our patients.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-homeo-green-light/20 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-homeo-green-dark" />
                  </div>
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-homeo-green-light/20 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-homeo-green-dark" />
                  </div>
                  <span className="text-gray-700">Certified Practitioners</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-homeo-green-light/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-homeo-blue/20 rounded-full blur-xl"></div>
              
              <div className="relative p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=800&auto=format"
                  alt="Homeopathic Medicine"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
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
              Our Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-homeo-green-dark">Core Values</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Balarambati HomeoHall, we're guided by a set of principles that ensure every patient receives the highest quality of care.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full overflow-hidden group">
                <CardContent className="p-8">
                  <div className="bg-homeo-green-dark w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-homeo-green-dark mb-4">Patient-Centered Care</h3>
                  <p className="text-gray-600">
                    We put our patients first, providing personalized treatment plans tailored to individual needs and circumstances. Every treatment plan is as unique as the person receiving it.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full overflow-hidden group">
                <CardContent className="p-8">
                  <div className="bg-homeo-blue w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-homeo-blue mb-4">Excellence in Practice</h3>
                  <p className="text-gray-600">
                    We maintain high standards in our practice, ensuring quality treatment with safe and effective homeopathic remedies. Our practitioners are continuously updating their knowledge.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full overflow-hidden group">
                <CardContent className="p-8">
                  <div className="bg-homeo-green-dark w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-homeo-green-dark mb-4">Holistic Approach</h3>
                  <p className="text-gray-600">
                    We treat the whole person, considering physical, mental, and emotional aspects to achieve complete wellness. This comprehensive approach leads to more effective, lasting results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-4">
              Expert Practitioners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-homeo-green-dark">Expert Team</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team consists of experienced homeopathic doctors dedicated to providing the best care for our patients. Each doctor brings unique expertise in different areas of homeopathy.
            </p>
            
            <Button 
              className="bg-homeo-green-dark hover:bg-homeo-blue transition-colors duration-300 group" 
              size="lg"
              asChild
            >
              <Link to="/doctors" className="flex items-center">
                Meet Our Doctors
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-homeo-green-dark to-homeo-blue text-white relative overflow-hidden">
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience Natural Healing Today
            </h2>
            <p className="text-lg text-gray-100 opacity-90 max-w-3xl mx-auto mb-8">
              Schedule a consultation with our experienced homeopathic doctors and take the first step towards a healthier, balanced life.
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-homeo-green-dark hover:bg-gray-100 transition-all duration-300 group"
              asChild
            >
              <Link to="/appointments/book" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Appointment
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
