"use client";
import { motion } from 'framer-motion';

export default function WeddingPlanningSection() {
  const events = [
    { name: 'Engagement', icon: '💍', image: '/images/wed8.png' },
    { name: 'Mehendi', icon: '🖌️', image: '/images/wed9.png' },
    { name: 'Sangeet', icon: '🎵', image: '/images/wed2.png' },
    { name: 'Wedding', icon: '👰', image: '/images/wed1.png' },
    { name: 'Reception', icon: '🎉', image: '/images/wed10.png' }
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-sans font-bold text-royal-blue mb-6">
            From Catering to Celebration — We Plan It All
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Event Square, the wedding planner division, helps you streamline your event with coordinated planning, venue support, food service, and guest-friendly execution.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group cursor-pointer"
            >
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full shadow-lg ring-4 ring-gold/20 group-hover:ring-gold/50 transition-all duration-300">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-5xl drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">{event.icon}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-royal-blue group-hover:text-gold transition-colors duration-300">{event.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gold text-royal-blue px-8 py-4 font-bold rounded-lg hover:bg-soft-gold transition-colors text-lg">
            Talk to Our Planning Team
          </button>
        </div>
      </div>
    </section>
  );
}