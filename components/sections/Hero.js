"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#001f3f]">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-24 pb-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Refined Luxury Line: Smaller font and medium weight */}
          <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-[11px] mb-5 block border-l-2 border-[#D4AF37] pl-4 leading-none">
            Bhubaneswar's Premium Catering & Event Destination
          </span>
          
          <h1 className="text-white font-black text-4xl lg:text-6xl leading-[1.1] mb-6 tracking-tight font-sans">
            Luxury Catering, <br />
            <span className="text-[#D4AF37]">Banquet Hall</span> & <br />
            Wedding Planning
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed font-medium">
            From intimate family functions to grand weddings and corporate gatherings, Mishra Caterers delivers premium food, elegant presentation, and seamless event execution at Event Square, Jaydev Vihar, Bhubaneswar.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-[#D4AF37] text-[#001f3f] px-7 py-3.5 font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all duration-300 rounded-sm shadow-xl">
              Get Custom Quote
            </button>
            <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-7 py-3.5 font-black uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#001f3f] transition-all duration-300 rounded-sm">
              Book Food Testing
            </button>
            <div className="w-full mt-2">
              <Link href="/menus" className="text-[#D4AF37] hover:text-white transition-colors underline underline-offset-8 font-bold text-sm tracking-wide">
                View Menus
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Premium Experience",
              "Jaydev Vihar Hall",
              "Wedding Specialist",
              "Spacious Parking",
              "Hassle-Free Service"
            ].map((text) => (
              <div key={text} className="bg-white/5 border border-white/10 text-white/70 px-3 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider">
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Collage - 4 Images, Sharp Edges */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3 h-[500px] lg:h-[600px]">
            <div className="space-y-3">
              <div className="w-full h-[60%] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <img src="/images/wed3.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Premium buffet setup" />
              </div>
              <div className="w-full h-[40%] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <img src="/images/wed4.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Wedding dining setup" />
              </div>
            </div>
            <div className="space-y-3 pt-10">
              <div className="w-full h-[40%] overflow-hidden rounded-sm border border-[#D4AF37]/30 shadow-2xl">
                <img src="/images/corp1.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Banquet hall interior" />
              </div>
              <div className="w-full h-[60%] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <img src="/images/eve1.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Event setup" />
              </div>
            </div>
          </div>

          {/* Floating Info Card */}
          <div className="absolute -bottom-4 -left-4 bg-white p-6 shadow-[20px_20px_60px_rgba(0,0,0,0.4)] rounded-sm max-w-xs border-t-4 border-[#D4AF37]">
            <h3 className="font-black text-[#001f3f] text-lg uppercase tracking-tighter">Event Square</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Jaydev Vihar, Bhubaneswar</p>
            <a href="tel:9337636010" className="text-[#D4AF37] font-black text-sm hover:text-[#001f3f] transition-colors">
              CALL: 9337636010
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}