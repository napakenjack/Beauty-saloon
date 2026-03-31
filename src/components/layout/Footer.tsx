import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-serif text-3xl font-semibold tracking-tight mb-6 block">
              Lumière
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Accessible luxury and expert care. Reveal your natural glow with customized beauty treatments designed to enhance your confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Specialists</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Elegance Boulevard<br />Suite 400<br />Austin, TX 78701</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary flex-shrink-0" />
                <a href="mailto:hello@lumieresalon.com" className="hover:text-white transition-colors">hello@lumieresalon.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-6">Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lumière Salon. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
