
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';



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

const ContactPage: React.FC = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent;
      if (custom.detail && custom.detail.title) {
        toast(custom.detail);
      }
    };
    window.addEventListener('trigger-toast', handler);
    return () => window.removeEventListener('trigger-toast', handler);
  }, [toast]);


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
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-homeo-green-dark">Contact</span> Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions or need to schedule an appointment? Reach out to us using the information below 
              or fill out the contact form. We're here to help you on your journey to natural healing.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 flex min-h-[60vh] items-center justify-center relative z-10 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {/* Contact Information */}
          <motion.div 
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-homeo-green-light/20 rounded-full blur-xl hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-homeo-blue/10 rounded-full blur-xl hidden lg:block"></div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative z-10">
              <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-4">
                Contact Information
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-homeo-green-dark p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:6291417179" className="text-gray-700 hover:text-homeo-green-dark transition-colors duration-200">
                      6291417179 / 6290109091
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="bg-homeo-blue p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:bagritak@gmail.com" className="text-homeo-blue hover:underline duration-200">
                      bagritak@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="bg-homeo-green-dark p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <a 
                      href="https://maps.google.com/?q=Balarambati,Singur,Hooghly,West Bengal"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-700 hover:text-homeo-green-dark transition-colors duration-200"
                    >
                      Near Balarambati station road ATM, Balarambati, Singur, Hooghly, West Bengal, India - 712409
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="bg-homeo-blue p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Thursday: 9AM-12PM & 5PM-9PM</p>
                      <p>Saturday - Sunday: 9AM-12PM & 5PM-9PM</p>
                      <p className="font-medium text-homeo-blue">Friday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          </motion.div>
          
        </motion.div>
        

      </div>
    </Layout>
  );
};

export default ContactPage;
