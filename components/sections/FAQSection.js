"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you provide food testing before booking?',
      answer: 'Yes, we offer complimentary food testing before final confirmation to ensure you experience our quality and presentation firsthand.'
    },
    {
      question: 'Can I book only catering without the hall?',
      answer: 'Absolutely! We provide standalone catering services for events at your preferred venue or private residence.'
    },
    {
      question: 'Do you provide banquet hall with catering?',
      answer: 'Yes, Event Square offers complete packages including our premium banquet hall and full-service catering under one roof.'
    },
    {
      question: 'Do you arrange full wedding events?',
      answer: 'We specialize in end-to-end planning—from engagement and mehendi to the reception—coordinating venue and culinary services seamlessly.'
    },
    {
      question: 'Do you customize veg and non-veg menus?',
      answer: 'Every menu is bespoke. We offer fully customizable vegetarian and non-vegetarian options tailored to your specific requirements.'
    },
    {
      question: 'Where is your banquet hall located?',
      answer: 'Event Square is located in Jaydev Vihar, Bhubaneswar, near Ginger Hotel—conveniently accessible for all city guests.'
    },
    {
      question: 'How early should I book my event date?',
      answer: 'For large weddings, we recommend 1-2 months in advance. For corporate or regular events, 2-3 weeks usually suffices.'
    }
  ];

  return (
    <section className="pb-24 pt-0 bg-gradient-to-b from-white via-slate-50 to-white font-sans overflow-hidden">
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
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[11px] px-4">Premium Support</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-sans font-bold text-[#001f3f] mb-4 tracking-tight uppercase">
            Frequently <span className="text-[#D4AF37]">Asked Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to know about our premium catering and event services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="mb-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Top accent line */}
              <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group/btn transition-all"
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Number indicator */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-[#D4AF37]">{index + 1}</span>
                  </div>
                  
                  <span className={`text-base lg:text-lg font-sans font-semibold transition-all duration-300 ${
                    openIndex === index 
                      ? 'text-[#D4AF37]' 
                      : 'text-[#001f3f] group-hover/btn:text-[#D4AF37]'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                <div className={`flex-shrink-0 ml-4 transition-all duration-500 ${openIndex === index ? 'rotate-180 scale-110' : 'scale-100'}`}>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#D4AF37]" strokeWidth={3} />
                  ) : (
                    <Plus className="w-6 h-6 text-slate-300 group-hover/btn:text-[#D4AF37]" strokeWidth={3} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-slate-100"
                  >
                    <div className="px-8 py-6 bg-gradient-to-br from-[#001f3f]/2 to-[#D4AF37]/5">
                      <p className="text-slate-700 leading-relaxed font-medium text-base pl-12">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Premium Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-12 border-t border-slate-200"
        >
          <div className="bg-gradient-to-r from-[#001f3f] to-[#142A6E] rounded-lg p-12 text-center shadow-xl">
            <h3 className="text-2xl font-sans font-bold text-white mb-3">
              Need More Information?
            </h3>
            <p className="text-slate-300 font-medium mb-6 max-w-xl mx-auto">
              Our concierge team is available 24/7 to answer any questions about your event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9337636010" className="bg-[#D4AF37] text-[#001f3f] px-8 py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-300 shadow-lg">
                📞 Call Concierge
              </a>
              <a href="https://wa.me/919337636010" className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-[#D4AF37] hover:text-[#001f3f] transition-all duration-300">
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}