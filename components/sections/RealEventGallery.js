"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RealEventGallery() {
  const galleryImages = [
    { src: '/images/wed1.png', category: 'Weddings' },
    { src: '/images/wed2.png', category: 'Weddings' },
    { src: '/images/wed3.png', category: 'Receptions' },
    { src: '/images/wed4.png', category: 'Weddings' },
    { src: '/images/corp1.png', category: 'Corporate' },
    { src: '/images/corp2.png', category: 'Corporate' },
    { src: '/images/eve1.png', category: 'Event Setup' },
    { src: '/images/eve2.png', category: 'Event Setup' }
  ];

  return (
    <section className="pb-24 pt-0 bg-gradient-to-b from-white to-slate-50 font-sans">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Eyebrow Label */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[11px] px-4">
              Visual Portfolio
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          
          {/* Section Header */}
          <h2 className="text-4xl lg:text-5xl font-sans font-bold text-[#001f3f] mb-4 tracking-tight uppercase">
            Moments We've <span className="text-[#D4AF37]">Perfected</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Curated moments from over 500 premium events—weddings, receptions, and corporate celebrations
          </p>
        </motion.div>

        {/* The Premium Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group bg-white rounded-lg shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              
              {/* Force Aspect Ratio for perfect uniformity */}
              <div className="aspect-square w-full overflow-hidden relative">
                
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Elegant Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/95 via-[#001f3f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
                  <div className="text-center">
                    <div className="h-[2px] w-12 bg-[#D4AF37] mx-auto mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <span className="text-white font-sans font-semibold text-sm uppercase tracking-[0.2em] block">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Detail Strip */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link 
            href="/gallery" 
            className="inline-block border-2 border-[#001f3f] text-[#001f3f] px-14 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-[#001f3f] hover:text-white hover:shadow-xl transition-all duration-500 rounded-lg transform hover:-translate-y-1"
          >
            Explore Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}