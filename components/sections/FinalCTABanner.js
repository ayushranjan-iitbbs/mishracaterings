"use client";
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';

export default function FinalCTABanner() {
  return (
    <section className="pb-24 pt-0 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#001f3f] rounded-sm overflow-hidden p-12 lg:p-20 text-center shadow-2xl"
        >
          {/* Elegant Background Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] opacity-5 translate-y-1/2 -translate-x-1/2 rounded-full blur-3xl" />
          
          {/* Subtle Inset Border */}
          <div className="absolute inset-4 border border-white/10 rounded-sm pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="h-[1px] w-6 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px]">Your Celebration Awaits</span>
              <div className="h-[1px] w-6 bg-[#D4AF37]" />
            </div>

            <h2 className="text-3xl lg:text-6xl font-sans font-bold text-white mb-8 tracking-tight uppercase leading-[1.1]">
              Let’s Create an Event Your <br className="hidden lg:block" /> 
              <span className="text-[#D4AF37]">Guests Will Remember</span>
            </h2>

            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Experience the pinnacle of culinary excellence and venue sophistication. From intimate gatherings to grand weddings, we execute with precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                whileHover={{ y: -2 }}
                href="tel:9337636010" 
                className="w-full sm:w-auto bg-[#D4AF37] text-[#001f3f] px-10 py-5 font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-white transition-all duration-500 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>

              <motion.a 
                whileHover={{ y: -2 }}
                href="https://wa.me/919337636010" 
                className="w-full sm:w-auto border-2 border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-white hover:text-[#001f3f] transition-all duration-500 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </motion.a>

              <motion.button 
                whileHover={{ y: -2 }}
                className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-white hover:text-[#001f3f] transition-all duration-500 flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-[#D4AF37]" />
                Book Food Testing
              </motion.button>
            </div>
            
            <div className="mt-12 opacity-40 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
              The Gold Standard of Bhubaneswar Hospitality
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}