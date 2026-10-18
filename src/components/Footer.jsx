import { Instagram, MapPin, ArrowUpRight } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-brand"><a className="brand brand-footer" href="#home"><span className="brand-name">Dr. Joshi's<span className="brand-dot">.</span></span><span className="brand-subtitle">DENTAL CLINIC & IMPLANT CENTRE</span></a><p>{clinicConfig.tagline}</p><a className="footer-social" href={clinicConfig.social.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16}/>{clinicConfig.social.instagramHandle}<ArrowUpRight size={14}/></a></div>
    <div><h3>Explore</h3><a href="#about">About the clinic</a><a href="#treatments">Treatments</a><a href="#dentists">Dental team</a><a href="#gallery">Gallery</a><a href="#insights">Dental insights</a></div>
    <div><h3>Patient information</h3><a href="#faq">FAQs</a><a href="#contact">Contact & location</a><p className="footer-note">Clinic details and contact number must be confirmed before launch.</p></div>
    <div><h3>Find the clinic</h3><p className="footer-address"><MapPin size={15}/>{clinicConfig.location.address}</p><a className="footer-directions" href={clinicConfig.location.mapsUrl} target="_blank" rel="noreferrer">Open directions <ArrowUpRight size={14}/></a></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {clinicConfig.name}</span><span>Website demo · Clinic information requires final approval</span></div></footer>;
}
