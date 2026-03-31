import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal bg-alabaster">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-40 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Mobile Sticky Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <a
          href="#book"
          className="flex w-full items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-charcoal hover:bg-charcoal/90 transition-colors"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
