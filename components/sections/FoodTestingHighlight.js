"use client";
import { motion } from 'framer-motion';

export default function FoodTestingHighlight() {
  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side - Refined & Framed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37]/20 rounded-sm -z-10 translate-x-2 translate-y-2" />
            
            <div className="relative overflow-hidden rounded-sm shadow-2xl group">
              <img
                src="/images/wed7.png"
                alt="Exquisite Food Presentation"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              {/* Floating Badge - Professional Open Sans Style */}
              <div className="absolute top-0 right-0 bg-[#001f3f] text-white p-8 rounded-bl-3xl shadow-xl border-b border-l border-[#D4AF37]/30">
                <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-1">
                  Guaranteed
                </div>
                <div className="text-xl font-bold uppercase tracking-tight leading-tight">
                  Taste First, <br/> Book Later
                </div>
              </div>

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-[#001f3f]/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </motion.div>

          {/* Text Side - Elegant & Clean */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px]">
                Quality Assurance
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-sans font-bold text-[#001f3f] mb-8 tracking-tight uppercase leading-[1.1]">
              Experience Excellence Before <span className="text-[#D4AF37]">Confirmation</span>
            </h2>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-normal border-l-4 border-slate-100 pl-6">
              We believe premium events begin with absolute trust. Experience our culinary artistry firsthand with a dedicated food testing session, ensuring our taste and presentation perfectly align with your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#D4AF37] text-[#001f3f] px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-[#001f3f] hover:text-white transition-all duration-500 rounded-sm shadow-lg">
                Book Testing Session
              </button>
              
              <a 
                href="tel:9337636010" 
                className="flex items-center justify-center border-2 border-[#001f3f] text-[#001f3f] px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-[#001f3f] hover:text-white transition-all duration-500 rounded-sm"
              >
                Call: 9337636010
              </a>
            </div>
            
            <p className="mt-8 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              Available at Event Square, Jaydev Vihar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}