"use client";
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

// Custom, Clean Brand SVGs to bypass the lucide build error
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 4s-1 2.17-2.41 3.06a13.46 13.46 0 0 1-8.31 16.17 13.37 13.37 0 0 1-7.64-3.06 13.43 13.43 0 0 0 9.42-2.68c-2.1-.06-3.87-1.44-4.5-3.39a4.26 4.26 0 0 0 1.92-.07c-2.1-.42-3.66-2.26-3.66-4.47a4.19 4.19 0 0 0 1.92.53c-1.23-.82-2.04-2.22-2.04-3.81a4.2 4.2 0 0 0 .57-2.1C5.46 8.84 8.35 11 12 11.16a4.25 4.25 0 0 1 7.23-3.89 8.5 8.5 0 0 0 2.72-1.04 4.25 4.25 0 0 1-1.87 2.36A8.48 8.48 0 0 0 23 7.64a8.65 8.65 0 0 1-1 3.62z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001a33] text-white pt-20 pb-10 font-sans border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Heritage */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-sans font-bold text-white tracking-tighter uppercase mb-1">
                Mishra <span className="text-[#D4AF37]">Caterers</span>
              </h3>
              <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em]">
                A Unit of Event Square
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Defining the gold standard of hospitality in Bhubaneswar. We specialize in bespoke culinary experiences and architectural event planning.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <InstagramIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <FacebookIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-sans font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menus', 'Banquet Hall', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center group"
                  >
                    <div className="w-0 group-hover:w-4 h-[1px] bg-[#D4AF37] transition-all mr-0 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Excellence/Services */}
          <div>
            <h4 className="text-[11px] font-sans font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-8">Our Services</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#D4AF37] rotate-45" />
                Wedding Catering
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#D4AF37] rotate-45" />
                Corporate Banquets
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#D4AF37] rotate-45" />
                Social Celebrations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#D4AF37] rotate-45" />
                Venue Management
              </li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h4 className="text-[11px] font-sans font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-8">Concierge</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-tighter mb-1">Direct Assistance</p>
                  <p className="text-white font-bold text-lg">9337636010</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-tighter mb-1">Our Address</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Jaydev Vihar, Near Ginger Hotel, <br />
                    Bhubaneswar, Odisha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              © {currentYear} Mishra Caterers | Event Square
            </p>
            <a href="https://markhype.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">
              Created by MarkHype
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}