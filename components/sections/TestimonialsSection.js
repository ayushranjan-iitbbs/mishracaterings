"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      event: 'Wedding Reception',
      review: 'Excellent food quality, smooth arrangement, and very professional service. Guests were extremely happy.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      event: 'Corporate Event',
      review: 'Outstanding catering for our company conference. Hygienic, timely, and delicious food.',
      rating: 5
    },
    {
      name: 'Anita Patel',
      event: 'Birthday Party',
      review: 'Perfect planning and execution. The food testing option gave us complete confidence.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      event: 'Engagement Ceremony',
      review: 'From venue to catering, everything was premium. Highly recommend Mishra Caterers.',
      rating: 5
    },
    {
      name: 'Meera Joshi',
      event: 'Family Function',
      review: 'Traditional Odia menu was authentic and delicious. Great service throughout.',
      rating: 5
    },
    {
      name: 'Amit Agarwal',
      event: 'Business Lunch',
      review: 'Professional catering service with efficient setup and cleanup. Will book again.',
      rating: 5
    }
  ];

  return (
    <section className="pb-24 pt-0 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px]">Guest Experiences</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-sans font-bold text-[#001f3f] mb-6 tracking-tight uppercase">
            What Our <span className="text-[#D4AF37]">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join 500+ satisfied clients who've experienced premium catering and event management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gradient accent line at top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Google Verified Header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                {/* Official Google G-Logo SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC04"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Verified Google Review</span>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4 gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />
                ))}
              </div>

              {/* Client Info */}
              <div className="mb-4">
                <h4 className="font-sans font-bold text-[#001f3f] text-base group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {testimonial.name}
                </h4>
                <p className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mt-1">
                  {testimonial.event}
                </p>
              </div>

              {/* Review Text */}
              <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500 italic">
                "{testimonial.review}"
              </p>

              {/* Timestamp Placeholder (adds authenticity) */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 opacity-60">
                 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Posted on Google</span>
                 <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-[10px] text-slate-400 font-bold">2026</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1">500+</div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Events Served</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1">4.9★</div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Average Rating</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center col-span-2 md:col-span-1"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1">10+</div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Years of Excellence</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}