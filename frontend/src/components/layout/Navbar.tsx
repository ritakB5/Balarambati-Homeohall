import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <motion.header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md", 
        scrolled 
          ? "bg-white/90 shadow-sm border-b border-gray-100" 
          : "bg-white/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <motion.img 
              src="/lovable-uploads/7fed81f1-8136-43eb-9663-e6e013a27f2f.png" 
              alt="Balarambati Homeohall Logo" 
              className="h-14 rounded-full shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div className="ml-4 flex flex-col">
              <span className="text-homeo-green-dark font-serif text-xl font-bold">Balarambati</span>
              <span className="text-homeo-blue text-sm font-medium">HomeoHall</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavLinks activeRoute={location.pathname} />
          </nav>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-homeo-green-dark hover:bg-homeo-green-light/20">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/95 backdrop-blur-md border-l border-gray-100">
                <div className="flex justify-between items-center mb-8 mt-4">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/7fed81f1-8136-43eb-9663-e6e013a27f2f.png" 
                      alt="Balarambati Homeohall Logo" 
                      className="h-10 rounded-full" 
                    />
                    <span className="ml-3 text-homeo-green-dark font-serif text-lg font-bold">Balarambati</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X className="h-5 w-5 text-gray-500" />
                    </Button>
                  </SheetClose>
                </div>
                <div className="flex flex-col space-y-5 mt-8">
                  <NavLinks vertical activeRoute={location.pathname} setSheetOpen={setSheetOpen} />
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Interface for NavLinks props
interface NavLinksProps {
  vertical?: boolean;
  activeRoute?: string;
  setSheetOpen?: (open: boolean) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ vertical, activeRoute, setSheetOpen }) => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/doctors', label: 'Our Doctors' },
    { path: '/treatments', label: 'Treatments' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  if (vertical) {
    return (
      <div className="space-y-1 w-full">
        {links.map((link) => {
          const isActive = activeRoute === link.path;
          return (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "flex items-center w-full py-3 px-4 rounded-md text-base font-medium transition-all duration-200",
                isActive 
                  ? "bg-homeo-green-light/20 text-homeo-green-dark font-semibold" 
                  : "text-gray-700 hover:bg-homeo-green-light/10 hover:text-homeo-green-dark"
              )}
              onClick={() => setSheetOpen && setSheetOpen(false)}
            >
              {link.label}
              {isActive && (
                <motion.div 
                  className="w-1 h-4 bg-homeo-green-dark ml-auto rounded-full"
                  layoutId="activeMobileLink"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1">
      {links.map((link) => {
        const isActive = activeRoute === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className="relative px-3 py-2 rounded-md"
          >
            <span className={cn(
              "relative z-10 text-sm font-medium transition-colors duration-200",
              isActive ? "text-homeo-green-dark font-semibold" : "text-gray-700 hover:text-homeo-green-dark"
            )}>
              {link.label}
            </span>
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-homeo-green-dark mx-3 rounded-t-full"
                layoutId="activeDesktopLink"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
