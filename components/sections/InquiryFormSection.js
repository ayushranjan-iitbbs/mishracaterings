"use client";
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Clock, Send } from 'lucide-react';

export default function InquiryFormSection() {
  return (
    <section className="pb-24 pt-0 bg-white font-sans overflow-hidden">
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
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px]">Reservations</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-sans font-bold text-[#001f3f] mb-6 tracking-tight uppercase">
            Plan Your <span className="text-[#D4AF37]">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-0 shadow-2xl rounded-sm overflow-hidden border border-slate-100">
          {/* Form Side - 7 Columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 lg:p-12"
          >
            <h3 className="text-xl font-sans font-bold text-[#001f3f] mb-8 uppercase tracking-tight">Event Specification</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Mishra"
                    className="w-full p-4 bg-slate-50 border-b-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full p-4 bg-slate-50 border-b-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Event Date</label>
                  <input
                    type="date"
                    className="w-full p-4 bg-slate-50 border-b-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Guest Count</label>
                  <input
                    type="number"
                    placeholder="Approx. Attendees"
                    className="w-full p-4 bg-slate-50 border-b-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Service Required</label>
                  <select className="w-full p-4 bg-slate-50 border-b-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 text-sm font-medium appearance-none">
                    <option>Catering & Hall</option>
                    <option>Catering Only</option>
                    <option>Full Event Planning</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Event Type</label>
                  <select className="w-full p-4 bg-slate-50 border-b-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 text-sm font-medium appearance-none">
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Social Celebration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Special Instructions</label>
                <textarea
                  placeholder="Tell us about your culinary preferences..."
                  rows={3}
                  className="w-full p-4 bg-slate-50 border-b-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition-all duration-300 text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#001f3f] text-white px-8 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#D4AF37] hover:text-[#001f3f] transition-all duration-500 rounded-sm flex items-center justify-center gap-3 shadow-xl group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Request Custom Proposal
              </button>
            </form>
          </motion.div>

          {/* Contact Side - 5 Columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#001f3f] p-8 lg:p-12 text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-sans font-bold mb-10 uppercase tracking-tight text-[#D4AF37]">Concierge Details</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Line</p>
                    <a href="tel:9337636010" className="text-lg font-bold hover:text-[#D4AF37] transition-colors">9337636010</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed">
                      Event Square Banquet Hall, <br />
                      Jaydev Vihar, Near Ginger Hotel, <br />
                      Bhubaneswar, Odisha
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Office Hours</p>
                    <p className="text-sm font-medium text-slate-300">10:00 AM — 09:00 PM Daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <a 
                href="https://wa.me/919337636010" 
                className="flex items-center justify-center gap-3 w-full border-2 border-[#D4AF37] text-[#D4AF37] py-4 rounded-sm font-bold uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-[#001f3f] transition-all duration-500"
              >
                <MessageSquare className="w-4 h-4" />
                Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}