"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PremiumMenuPreview() {
  const menus = [
    {
      title: 'Wedding Premium',
      subtitle: 'Grand Celebrations',
      items: [
        'Exotic Welcome Drinks',
        'Gourmet Starters',
        'Global Main Course',
        'Artisanal Breads & Sweets',
        'Live Culinary Counters'
      ]
    },
    {
      title: 'Traditional Odia',
      subtitle: 'Heritage Flavors',
      items: [
        'Temple Style Khichdi',
        'Authentic Dalma',
        'Tomato Khajur Khata',
        'Dahi Nadia Pacheri',
        'Premium Gulab Jamun'
      ]
    },
    {
      title: 'Corporate Elite',
      subtitle: 'Business Lunches',
      items: [
        'Continental Breakfast',
        'Executive Lunch Buffets',
        'Premium Hi-Tea',
        'Custom Gift Hampers',
        'Hygienic Bento Boxes'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Culinary Art
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#001f3f] mb-6 tracking-tight uppercase font-sans">
            Curated Menu <span className="text-[#D4AF37]">Experiences</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Explore handpicked culinary journeys designed for grand weddings, 
            intimate social gatherings, and elite corporate events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-slate-100 p-10 rounded-sm hover:border-[#D4AF37] transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              {/* Card Header */}
              <div className="mb-8">
                <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mb-2">
                  {menu.subtitle}
                </p>
                <h3 className="text-2xl font-sans font-bold text-[#001f3f] tracking-tight uppercase">
                  {menu.title}
                </h3>
                <div className="mt-4 h-[2px] w-12 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
              </div>

              {/* Menu Items */}
              <ul className="space-y-5 mb-10">
                {menu.items.map((item, i) => (
                  <li key={i} className="text-slate-600 flex items-center text-sm font-medium tracking-wide">
                    <span className="w-1.5 h-1.5 border border-[#D4AF37] rotate-45 mr-4 flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Footer Link */}
              <Link 
                href="/menus" 
                className="inline-flex items-center text-[#001f3f] text-[11px] font-black uppercase tracking-widest group/link"
              >
                Explore More
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* Background Accent */}
              <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                 <div className="text-6xl font-black text-[#001f3f]">0{index + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-400 font-medium italic text-sm border-t border-slate-100 pt-8 inline-block px-12">
            Tailored dietary requirements and <span className="text-[#D4AF37]">custom packages</span> available upon request
          </p>
        </div>
      </div>
    </section>
  );
}