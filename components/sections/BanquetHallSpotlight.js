"use client";
import { motion } from 'framer-motion';
import { MapPin, Car, Users, Star, CheckCircle2 } from 'lucide-react';

export default function BanquetHallSpotlight() {
  const features = [
    'Prime location: Jaydev Vihar, Near Ginger Hotel',
    'Elegant indoor event space with climate control',
    'Integrated Catering + Venue management',
    'Spacious dedicated parking for guests',
    'Professional on-site coordination team',
    'Versatile layout for Weddings & Conferences'
  ];

  return (
    <section className="pb-24 pt-0 bg-[#001f3f] overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px]">The Venue</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-sans font-bold text-white mb-6 tracking-tight uppercase">
            Event Square <span className="text-[#D4AF37]">Banquet Hall</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bhubaneswar’s premier destination for sophisticated celebrations and corporate excellence in the heart of Jaydev Vihar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Editorial Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Architectural Frame Overlay */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4AF37]/30 rounded-sm -z-10" />
            
            <div className="relative overflow-hidden rounded-sm shadow-2xl group border border-white/10">
              <img
                src="/images/eve1.png"
                alt="Event Square Banquet Hall Interior"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6">
                <div className="bg-[#D4AF37] text-[#001f3f] px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-2">
                  Premium Venue
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Side - Clean Typography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-sans font-bold text-white mb-8 tracking-tight uppercase">
              World-Class <span className="text-[#D4AF37]">Amenities</span>
            </h3>
            
            <ul className="grid grid-cols-1 gap-5 mb-12">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <div className="mr-4 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-slate-200 text-base font-medium leading-relaxed tracking-wide">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#D4AF37] text-[#001f3f] px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all duration-500 rounded-sm shadow-lg">
                Check Availability
              </button>
              
              <button className="border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-[#001f3f] transition-all duration-500 rounded-sm">
                Request a Tour
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4 opacity-50">
               <MapPin className="text-[#D4AF37] w-5 h-5" />
               <p className="text-xs text-white uppercase tracking-[0.2em] font-medium">
                  Jaydev Vihar, Near Ginger Hotel, Bhubaneswar
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}