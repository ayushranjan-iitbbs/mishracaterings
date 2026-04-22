"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Wedding Catering',
      description: 'Royal menus, live counters, and guest-focused service.',
      image: '/images/wed1.png'
    },
    {
      title: 'Reception & Engagement',
      description: 'Elegant food and banquet arrangements for premium gatherings.',
      image: '/images/wed5.png'
    },
    {
      title: 'Corporate Catering',
      description: 'Professional service for conferences and office events.',
      image: '/images/corp1.png'
    },
    {
      title: 'Private Parties',
      description: 'Curated menus and decor-friendly service for family moments.',
      image: '/images/wed6.png'
    },
    {
      title: 'Banquet Hall',
      description: 'A centrally located premium hall for grand celebrations.',
      image: '/images/eve2.png'
    },
    {
      title: 'Event Planning',
      description: 'End-to-end coordination through one experienced team.',
      image: '/images/eve3.png'
    }
  ];

  return (
    <section className="py-24 bg-[#001f3f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight uppercase font-sans">
            Signature <span className="text-[#D4AF37]">Services</span>
          </h2>
          <div className="h-[1px] w-20 bg-[#D4AF37] mx-auto opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[380px] rounded-sm overflow-hidden group shadow-xl border border-white/5"
            >
              {/* Image with controlled exposure */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.7] group-hover:brightness-[0.4]"
              />
              
              {/* Inner Frame Hover Effect */}
              <div className="absolute inset-4 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-all duration-500 z-10" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <h3 className="text-xl font-sans font-bold text-white mb-2 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300 uppercase">
                  {service.title}
                </h3>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="text-sm font-medium text-slate-300 mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <Link href="/contact" className="inline-block text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">
                    Inquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-bold uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#001f3f] transition-all duration-500 rounded-sm shadow-xl">
            View All Offerings
          </button>
        </div>
      </div>
    </section>
  );
}