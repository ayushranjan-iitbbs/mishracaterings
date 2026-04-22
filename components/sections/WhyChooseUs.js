"use client";
import { motion } from 'framer-motion';
import { Star, ChefHat, MapPin, Users, Calendar, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: ChefHat,
      title: 'Premium Catering Experience',
      description: 'Elegant menus, hygienic preparation, refined presentation'
    },
    {
      icon: Star,
      title: 'Food Testing Before Booking',
      description: 'Taste first, then book with confidence'
    },
    {
      icon: Award,
      title: 'Banquet Hall + Catering',
      description: 'One venue, one team, smoother execution'
    },
    {
      icon: Calendar,
      title: 'Wedding Planning Support',
      description: 'Reception, engagement, sangeet, decor coordination'
    },
    {
      icon: Users,
      title: 'Corporate Event Expertise',
      description: 'Conferences, seminars, business gatherings'
    },
    {
      icon: MapPin,
      title: 'Prime Bhubaneswar Location',
      description: 'Jaydev Vihar, Near Ginger Hotel, easy access'
    }
  ];

  return (
    <section className="pb-16 pt-0 bg-white"> {/* pt-0 removes any top margin/padding */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[11px]">Our Excellence</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001f3f] mb-6 tracking-tight font-sans">
            Why Families & <span className="text-[#D4AF37] font-extrabold">Corporates</span> Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We combine exceptional food, refined presentation, and end-to-end coordination to create memorable celebrations without stress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white border border-slate-100 rounded-sm hover:border-[#D4AF37] transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors rounded-bl-full" />
              
              {/* Perfectly straight icon box */}
              <div className="w-14 h-14 bg-[#001f3f] flex items-center justify-center mb-8 rounded-sm transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              
              <h3 className="text-xl font-sans font-black text-[#001f3f] mb-4 tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium border-l-2 border-slate-100 pl-4 group-hover:border-[#D4AF37] transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}