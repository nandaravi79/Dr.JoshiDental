import { useState } from 'react';
import { ArrowDown, ArrowUpRight, CalendarDays, Check, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import AppointmentForm from './components/AppointmentForm';
import Treatments from './components/Treatments';
import DentistProfiles from './components/DentistProfiles';
import SmileGallery from './components/SmileGallery';
import DentalInsights from './components/DentalInsights';
import FAQAccordion from './components/FAQAccordion';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { clinicConfig, buildWhatsAppUrl } from './data/clinicConfig';

const trustItems = [
  { icon: HeartHandshake, title: 'Personalised care', text: 'Treatment discussions centred on your individual needs.' },
  { icon: ShieldCheck, title: 'Preventive guidance', text: 'Practical information to support everyday oral health.' },
  { icon: Sparkles, title: 'Treatment options', text: 'Ask about available restorative and cosmetic services.' }
];

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialTreatment, setInitialTreatment] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const openBooking = (treatment = '') => {
    setInitialTreatment(typeof treatment === 'string' ? treatment : treatment?.title || '');
    setSelectedTreatment(null);
    setBookingOpen(true);
  };

  return <div id="home">
    <Navbar onBook={() => openBooking()} />
    <main>
      <section className="hero">
        <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-pill"><span className="eyebrow-dot"/> {clinicConfig.eyebrow}</div>
            <h1>Modern smiles.<br/><span>Thoughtful care.</span></h1>
            <p className="hero-lede">A more personal approach to dental care, with clear guidance to help you make informed decisions about your smile.</p>
            <div className="hero-actions"><button className="button button-primary button-large" onClick={() => openBooking()}><CalendarDays size={18}/> Enquire for an appointment <ArrowUpRight size={17}/></button><a className="button button-outline button-large" href="#treatments">Explore treatments <ArrowDown size={16}/></a></div>
            <div className="hero-footnote"><span className="location-dot"/><span>Dr. Joshi's Dental Clinic & Implant Centre · {clinicConfig.location.area}</span></div>
          </div>
          <div className="hero-visual" aria-label="Dental clinic visual placeholder">
            <div className="hero-image-card">
              <div className="hero-image-placeholder"><div className="hero-tooth">✧</div><span className="hero-image-label">YOUR SMILE, YOUR CARE</span><span className="hero-image-caption">Clinic photography to be supplied</span></div>
              <div className="hero-image-overlay"/>
            </div>
            <div className="floating-note floating-note-top"><span className="floating-icon"><Check size={16}/></span><span><strong>Patient-first approach</strong><small>Clear, thoughtful guidance</small></span></div>
            <div className="floating-note floating-note-bottom"><span className="floating-number">01</span><span><strong>Care that starts with listening</strong><small>Discuss your dental concerns</small></span></div>
            <div className="hero-ring"/>
          </div>
        </div>
        <div className="hero-bottom-line"><span>PERSONAL CARE</span><span>PREVENTIVE DENTISTRY</span><span>RESTORATIVE OPTIONS</span></div>
      </section>

      <section className="trust-strip"><div className="container trust-grid">{trustItems.map(({icon: Icon, title, text}) => <article className="trust-item" key={title}><div className="trust-icon"><Icon size={21}/></div><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section>

      <section className="section section-blush" id="about"><div className="container about-grid">
        <div className="about-art"><div className="about-art-main"><div className="about-art-symbol">✧</div><span>THE ART OF A HEALTHIER SMILE</span></div><div className="about-art-stamp"><span>DR. JOSHI'S</span><strong>DENTAL CARE</strong><small>PARTAPUR</small></div><div className="about-art-caption">A clinic image can be added here</div></div>
        <div className="about-copy"><span className="eyebrow">ABOUT THE CLINIC</span><h2>A little more care.<br/><span>A lot more clarity.</span></h2><p>Dental care should begin with a conversation. Learn about available treatment options, ask questions, and discuss the approach that may be right for your oral health.</p><p>This demo presents the clinic's identity in a clean, modern format. The final website can include the clinic's own photographs, approved team biographies, and verified service details.</p><ul className="check-list"><li><Check size={16}/> Clear treatment information</li><li><Check size={16}/> Appointment enquiry options</li><li><Check size={16}/> Local directions and contact details</li></ul><a className="text-link" href="#contact">Find the clinic <ArrowUpRight size={16}/></a></div>
      </div></section>

      <Treatments onSelect={setSelectedTreatment}/>
      <DentistProfiles onBook={openBooking}/>

      <section className="section section-white why-section"><div className="container why-grid"><div><span className="eyebrow">A BETTER EXPERIENCE</span><h2>Good care starts<br/> with good questions.</h2><p>Know what to expect, understand the available options, and speak with a dental professional about your needs.</p><button className="button button-primary" onClick={() => openBooking()}>Start an enquiry <ArrowUpRight size={16}/></button></div><div className="why-points"><article><span>01</span><div><h3>Understand your options</h3><p>Ask the dental team to explain potential benefits, limitations, and alternatives.</p></div></article><article><span>02</span><div><h3>Make informed decisions</h3><p>Choose next steps after an individual assessment and discussion with a dentist.</p></div></article><article><span>03</span><div><h3>Keep oral health in focus</h3><p>Get advice about preventive care and follow-up appropriate to your needs.</p></div></article></div></div></section>

      <SmileGallery/>
      <DentalInsights/>
      <section className="section section-white testimonial-section"><div className="container testimonial-demo"><div className="testimonial-mark">“</div><span className="eyebrow">PATIENT STORIES</span><h2>Real experiences belong here.</h2><p>Once the clinic provides approved patient feedback, this section can feature genuine testimonials with permission. No reviews have been fabricated for this demo.</p><span className="testimonial-placeholder"><span className="testimonial-line"/>Patient testimonials awaiting clinic approval</span></div></section>
      <ContactSection/>
      <FAQAccordion/>
      <FinalCTA onBook={() => openBooking()}/>
    </main>
    <Footer/>
    <div className="floating-contact">{buildWhatsAppUrl() ? <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WhatsApp ↗</a> : <button onClick={() => openBooking()} aria-label="Open appointment enquiry">Enquire ↗</button>}</div>
    {bookingOpen && <AppointmentForm isOpen={bookingOpen} onClose={() => setBookingOpen(false)} initialTreatment={initialTreatment}/>}
    {selectedTreatment && <Modal title={selectedTreatment.title} onClose={() => setSelectedTreatment(null)}><p className="treatment-detail">{selectedTreatment.details}</p><p className="medical-note">Treatment suitability depends on an individual dental assessment. This information is general and does not replace professional advice.</p><button className="button button-primary button-full" onClick={() => openBooking(selectedTreatment.title)}><CalendarDays size={17}/> Enquire about this treatment</button></Modal>}
  </div>;
}
