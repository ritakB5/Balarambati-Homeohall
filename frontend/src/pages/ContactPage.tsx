
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight, CalendarClock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Map from '@/components/Map';

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    // Reset the form
    event.currentTarget.reset();
  };

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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16"
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
                    <a href="tel:6291417179" className="text-gray-700 hover:text-homeo-green-dark transition-colors">
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
                    <a href="mailto:bagritak@gmail.com" className="text-homeo-blue hover:underline">
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
                      className="text-gray-700 hover:text-homeo-green-dark transition-colors"
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
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CalendarClock className="mr-2 h-5 w-5 text-homeo-green-dark" />
                  Book an Appointment
                </h3>
                <p className="text-gray-700 mb-6">
                  For quick appointment booking, please use our online booking system or call us directly.
                </p>
                <Button 
                  className="bg-homeo-green-dark hover:bg-homeo-blue transition-colors duration-300 group" 
                  size="lg"
                  asChild
                >
                  <Link to="/appointments/book" className="flex items-center">
                    Book Appointment
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-4">
                Send a Message
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="Your full name" 
                    className="border-gray-200 focus:border-homeo-green-dark focus:ring-homeo-green-light/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="Your email address" 
                    className="border-gray-200 focus:border-homeo-green-dark focus:ring-homeo-green-light/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="Your phone number" 
                    className="border-gray-200 focus:border-homeo-green-dark focus:ring-homeo-green-light/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Your Message</Label>
                  <textarea
                    id="message"
                    className="w-full min-h-[150px] rounded-md border border-gray-200 bg-white px-3 py-2 text-sm resize-none focus:border-homeo-green-dark focus:ring-homeo-green-light/20"
                    required
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-homeo-green-dark hover:bg-homeo-blue transition-colors duration-300 group"
                  size="lg"
                >
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Map Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block px-3 py-1 bg-homeo-green-light/20 rounded-full text-homeo-green-dark text-sm font-medium mb-4">
              Our Location
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 leading-relaxed">
              We're conveniently located near Balarambati station road, making it easy for patients to visit us.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <Map />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactPage;
