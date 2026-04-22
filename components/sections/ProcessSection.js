"use client";
import { motion } from 'framer-motion';
import { Utensils, Calendar, CheckCircle, Coffee } from 'lucide-react';

const steps = [
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Consultation",
    desc: "We discuss your vision, guest count, and specific dietary preferences to craft the perfect strategy.",
    label: "Step 01"
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Food Testing",
    desc: "Experience our culinary excellence firsthand. We invite you to taste and refine your customized menu.",
    label: "Step 02"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Planning",
    desc: "Our team coordinates venue logistics and equipment setup for a flawless execution.",
    label: "Step 03"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Execution",
    desc: "On the big day, we deliver premium service and delicious food while you enjoy your celebration.",
    label: "Step 04"
  }
];

export default function ProcessSection() {
  return (
    <section className="pb-24 pt-0 bg-[#FAF9F6] font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px]">The Journey</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-sans font-bold text-[#001f3f] mb-6 tracking-tight uppercase">
            Our Seamless <span className="text-[#D4AF37]">Process</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From the first taste to the final guest, we handle every detail with professional precision.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-12 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="bg-white p-8 rounded-sm border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col items-center text-center">
                
                {/* Step Label */}
                <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-6">
                  {step.label}
                </span>

                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-[#001f3f] text-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-sans font-bold text-[#001f3f] mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-8 w-8 h-[2px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">
            Professionalism in every bite. Excellence in every event.
          </p>
        </motion.div>
      </div>
    </section>
  );
}