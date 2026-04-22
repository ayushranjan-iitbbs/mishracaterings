"use client";
import { motion } from 'framer-motion';
import { Navigation, MapPin, ExternalLink } from 'lucide-react';

export default function MapLocationSection() {
  return (
    <section className="pb-24 pt-0 bg-gradient-to-b from-white to-slate-50 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[11px] px-4">Location</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-sans font-bold text-[#001f3f] mb-4 tracking-tight uppercase">
            Visit Our <span className="text-[#D4AF37]">Venue</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover our premium banquet hall in the heart of Jaydev Vihar, Bhubaneswar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Side - 8 Columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative group"
          >
            {/* Architectural Frame Decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]/30 z-0" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37] z-10" />
            
            <div className="relative z-20 h-[500px] w-full bg-slate-200 rounded-lg overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-1000 border-2 border-slate-100 group-hover:border-[#D4AF37]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1465851416733!2d85.81845181491564!3d20.294178586403243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19099999999999%3A0x0!2sJaydev%20Vihar!5e0!3m2!1sen!2sin!4v1713800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Info Side - 4 Columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="bg-gradient-to-br from-[#001f3f] to-[#142A6E] p-10 lg:p-12 rounded-lg shadow-2xl flex-grow flex flex-col justify-between border-t-4 border-[#D4AF37] relative overflow-hidden group">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="inline-block p-3 bg-[#D4AF37]/10 rounded-lg mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-sans font-bold text-white mb-2 uppercase tracking-tight leading-tight">
                  Event Square
                </h3>
                <p className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest mb-6">Banquet Hall</p>
                
                <div className="space-y-5 text-slate-300 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2">Full Address</p>
                    <p className="text-sm font-medium leading-relaxed">
                      Jaydev Vihar, Near Ginger Hotel,<br />
                      Bhubaneswar, Odisha 751013
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2">Availability</p>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Open 10 AM — 9 PM Daily
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 relative z-10">
                <a
                  href="https://maps.google.com/?q=Jaydev+Vihar,+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full bg-[#D4AF37] text-[#001f3f] px-8 py-4 font-bold uppercase tracking-widest text-[11px] rounded-lg transition-all duration-500 flex items-center justify-center gap-2 hover:bg-white hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Navigation className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                  Get Directions
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white border border-slate-200 p-6 rounded-lg text-center hover:border-[#D4AF37] hover:shadow-lg transition-all">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Call Us</p>
            <a href="tel:9337636010" className="text-2xl font-bold text-[#001f3f] hover:text-[#D4AF37] transition-colors">
              9337636010
            </a>
          </div>
          
          <div className="bg-white border border-slate-200 p-6 rounded-lg text-center hover:border-[#D4AF37] hover:shadow-lg transition-all">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">WhatsApp</p>
            <a href="https://wa.me/919337636010" className="text-lg font-bold text-[#25D366] hover:text-[#001f3f] transition-colors">
              Message Us
            </a>
          </div>
          
          <div className="bg-white border border-slate-200 p-6 rounded-lg text-center hover:border-[#D4AF37] hover:shadow-lg transition-all">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Hours</p>
            <p className="text-lg font-bold text-[#001f3f]">
              10 AM — 9 PM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}