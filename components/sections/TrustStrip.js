"use client";
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Events Hosted' },
    { number: 'Premium', label: 'Cuisine Selection' },
    { number: 'Food Testing', label: 'Before Booking' },
    { number: 'Wedding to', label: 'Corporate' },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative text-center bg-[#001f3f] p-8 rounded-sm shadow-2xl overflow-hidden"
            >
              {/* Decorative Gold Accent Line at top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Number/Heading */}
              <div className="text-3xl lg:text-4xl font-black text-[#D4AF37] mb-3 tracking-tighter">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-[10px] lg:text-[11px] text-slate-300 font-bold uppercase tracking-[0.2em] leading-relaxed">
                {stat.label}
              </div>

              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Optional: Fine Gold Line at the very bottom for extra class */}
      <div className="mt-20 w-32 h-[1px] bg-[#D4AF37] mx-auto opacity-50" />
    </section>
  );
}