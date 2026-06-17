import { Facebook, Instagram, MapPin, Mail, Phone, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            <Sprout size={28} />
            <span>GreenNest</span>
          </Link>
          <p>Healthy indoor plants, calming care advice, and greener corners for every home.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p><Phone size={15} /> +880 123 456 789</p>
          <p><Mail size={15} /> hello@greennest.com</p>
          <p><MapPin size={15} /> Dhaka, Bangladesh</p>
        </div>
        <div>
          <h3>Follow</h3>
          <div className="socials">
            <a href="https://instagram.com" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://facebook.com" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://pinterest.com" aria-label="Pinterest">P</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 GreenNest. All rights reserved.</div>
    </footer>
  );
}
