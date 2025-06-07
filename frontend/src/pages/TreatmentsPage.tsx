
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';

import { ArrowRight, Sparkles, ShieldPlus } from 'lucide-react';


const treatments = [
  {
    id: 1,
    name: 'Classical Homeopathy',
    description: 'Traditional homeopathic treatment following the principles of Samuel Hahnemann. Focuses on treating the whole person rather than just symptoms.',
    details: 'Our classical homeopathy approach involves a detailed initial consultation to understand your complete health history, personality traits, and specific symptoms. Our experienced practitioners then prescribe a single remedy that best matches your unique symptom picture.'
  },
  {
    id: 2,
    name: 'Constitutional Treatment',
    description: 'Addresses the underlying constitution of the patient for long-term health improvement.',
    details: 'Constitutional treatment aims to improve your overall health and vitality by targeting the root causes of various health issues. This approach often leads to improvements across multiple health concerns simultaneously.'
  },
  {
    id: 3,
    name: 'Acute Care',
    description: 'Quick relief for sudden onset conditions like cold, fever, injuries, etc.',
    details: 'Our acute care treatments provide fast-acting remedies for sudden illnesses, injuries, and flare-ups. These treatments can be used alongside conventional medical care and are particularly effective for conditions like colds, fevers, minor injuries, and digestive upsets.'
  },
  {
    id: 4,
    name: 'Pediatric Homeopathy',
    description: 'Gentle treatments for children with various health conditions.',
    details: 'Our child-friendly approach to homeopathy focuses on gentle, natural remedies that are safe for children of all ages. We specialize in treating common childhood ailments, developmental issues, behavioral concerns, and chronic conditions.'
  },
  {
    id: 5,
    name: 'Chronic Disease Management',
    description: 'Long-term homeopathic care for managing persistent conditions.',
    details: 'Our chronic disease management program combines homeopathic remedies with lifestyle guidance to help manage long-term health conditions. Regular follow-ups ensure that your treatment evolves as your health improves.'
  },
  {
    id: 6,
    name: 'Preventative Care',
    description: 'Strengthening the body\'s natural defenses to prevent illness.',
    details: 'Preventative homeopathic care aims to boost your immune system and overall resilience, reducing the frequency and severity of illnesses and supporting long-term health maintenance.'
  }
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

const TreatmentsPage: React.FC = () => {
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
              Natural Healing Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-homeo-green-dark">Homeopathic Treatments</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Balarambati HomeoHall, we offer a wide range of homeopathic treatments 
              tailored to your individual needs. Our experienced doctors use traditional 
              homeopathic principles to provide natural and effective care.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {treatments.map((treatment) => (
            <motion.div 
              key={treatment.id}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-homeo-green-light/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-6 w-6 text-homeo-green-dark" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-homeo-green-light/10 flex items-center justify-center text-homeo-green-dark group-hover:bg-homeo-green-dark group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-homeo-green-dark">{treatment.name}</CardTitle>
                  <CardDescription className="text-homeo-blue">{treatment.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-6">
                  <p className="text-gray-600 text-sm">{treatment.details}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 bg-gray-50/50">
                  <div className="flex items-center text-sm text-gray-600">
                    <ShieldPlus className="h-4 w-4 mr-2 text-homeo-green-dark" />
                    <span>100% Natural Treatment</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          
        </motion.div>
      </div>
    </Layout>
  );
};

export default TreatmentsPage;
