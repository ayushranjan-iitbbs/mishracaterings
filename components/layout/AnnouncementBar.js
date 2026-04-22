export default function AnnouncementBar() {
  return (
    <div className="bg-royal-blue text-white py-2 px-4 text-center text-sm border-b border-gold/20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-sans">
          Premium Catering | Banquet Hall | Wedding Planning 
          <span className="hidden md:inline mx-2 text-gold">|</span>
          <span className="text-soft-gold">Food Testing Available Before Booking</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="tel:9337636010" className="hover:text-gold transition-colors font-bold">
            Call: 9337636010
          </a>
          <button className="bg-gold text-royal-blue px-3 py-0.5 text-xs font-bold uppercase tracking-tighter hover:bg-white transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}