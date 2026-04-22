"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white ${
          isScrolled 
            ? 'py-7 shadow-xl border-b border-gray-100' // Increased height on scroll
            : 'py-5' 
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Area - Compact Roboto-style Bold */}
          <Link href="/" className="group flex flex-col no-underline">
            <span className="text-lg font-black tracking-tight font-sans leading-none">
              <span className="text-[#001f3f]">MISHRA</span>
              <span className="text-[#D4AF37] ml-1">CATERERS</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-slate-400 mt-1">
              A Unit of Event Square
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Catering', '/catering'],
              ['Banquet', '/banquet'],
              ['Weddings', '/wedding'],
              ['Menus', '/menus'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
            ].map(([title, url]) => (
              <Link 
                key={title} 
                href={url} 
                className="text-sm font-semibold text-black transition-all duration-300 relative group hover:text-[#D4AF37]"
              >
                {title}
                {/* Thick Gold Underline that expands from center */}
                <span className="absolute left-1/2 bottom-[-6px] w-0 h-[2.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2.5 text-[11px] font-black uppercase tracking-widest bg-[#001f3f] text-white hover:bg-[#D4AF37] hover:text-[#001f3f] transition-all duration-300">
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#001f3f]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-5 shadow-2xl">
             {['Home', 'About', 'Menus', 'Contact'].map((item) => (
               <Link key={item} href={`/${item.toLowerCase()}`} className="block text-lg font-bold text-black hover:text-[#D4AF37]">
                 {item}
               </Link>
             ))}
             <button className="w-full bg-[#001f3f] text-white py-4 font-black uppercase tracking-widest text-xs">
                Request Quote
             </button>
          </div>
        )}
      </header>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919337636010" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </>
  );
}