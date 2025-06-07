
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-homeo-green-dark to-homeo-green-dark/95 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-homeo-blue/10 blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-48 h-48 rounded-full bg-homeo-blue/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Column 1: Logo and Description */}
          <motion.div 
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
          >
            <Link to="/" className="flex items-center mb-4 group">
              <div className="bg-white rounded-full p-2 shadow-lg transform transition-transform group-hover:scale-105">
                <img 
                  src="/lovable-uploads/7fed81f1-8136-43eb-9663-e6e013a27f2f.png" 
                  alt="Balarambati Homeohall Logo" 
                  className="h-16 rounded-full" 
                />
              </div>
            </Link>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-white">Balarambati HomeoHall</h3>
              <p className="mt-3 text-gray-200 text-sm leading-relaxed">
                Providing natural healing through homeopathic remedies with personalized care and attention for over 15 years.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-5 flex items-center space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div 
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h4 className="font-serif text-lg font-semibold mb-5 text-white flex items-center">
              <span className="w-6 h-[2px] bg-homeo-blue mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/doctors", label: "Our Doctors" },
                { to: "/treatments", label: "Treatments" },
                { to: "/appointments/book", label: "Book Appointment" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/my-appointment", label: "My Appointments" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-200 hover:text-white transition-colors group flex items-center"
                  >
                    <span className="w-0 h-[1px] bg-white transition-all duration-300 mr-0 group-hover:w-3 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h4 className="font-serif text-lg font-semibold mb-5 text-white flex items-center">
              <span className="w-6 h-[2px] bg-homeo-blue mr-3"></span>
              Contact Us
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <Phone size={18} className="text-gray-200" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 mb-1">Phone</p>
                  <a href="tel:6291417179" className="text-white text-sm hover:underline">
                    6291417179 / 6290109091
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <Mail size={18} className="text-gray-200" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 mb-1">Email</p>
                  <a href="mailto:bagritak@gmail.com" className="text-white text-sm hover:underline">
                    bagritak@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group sm:col-span-2">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300 mt-1">
                  <MapPin size={18} className="text-gray-200" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 mb-1">Address</p>
                  <a 
                    href="https://maps.google.com/?q=Balarambati,Singur,Hooghly,West Bengal" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm hover:underline"
                  >
                    Near Balarambati station road ATM, Balarambati, Singur, Hooghly, West Bengal, India - 712409
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group sm:col-span-2">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300 mt-1">
                  <Clock size={18} className="text-gray-200" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 mb-1">Working Hours</p>
                  <div className="text-white text-sm grid grid-cols-1 sm:grid-cols-2 gap-1">
                    <p>Mon-Thu, Sat: 9AM-12PM & 5PM-9PM</p>
                    <p>Sun: 9AM-12PM & 5PM-9PM</p>
                    <p>Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subscribe to Newsletter */}
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <h5 className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-homeo-blue/50"
                />
                <Button className="bg-homeo-blue hover:bg-homeo-blue/80 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Balarambati HomeoHall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
