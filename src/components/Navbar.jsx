import { useEffect, useState } from 'react';
import { Menu, X, CalendarDays, MessageCircle } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../data/clinicConfig';

const links = [
  ['About', '#about'],
  ['Treatments', '#treatments'],
  ['Dentists', '#dentists'],
  ['Smile Gallery', '#gallery'],
  ['Insights', '#insights'],
  ['Contact', '#contact']
];

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={clinicConfig.name}>
          <span className="brand-name">Dr. Joshi's<span className="brand-dot">.</span></span>
          <span className="brand-subtitle">DENTAL CLINIC & IMPLANT CENTRE</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="nav-actions">
          {whatsappUrl && <a className="button button-quiet nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a>}
          <button className="button button-primary nav-book" onClick={onBook}><CalendarDays size={16}/> Book Appointment</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="mobile-menu">
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <button className="button button-primary button-full" onClick={() => { closeMenu(); onBook(); }}><CalendarDays size={17}/> Enquire for Appointment</button>
        {whatsappUrl && <a className="button button-quiet button-full" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat on WhatsApp</a>}
      </div>}
    </header>
  );
}
