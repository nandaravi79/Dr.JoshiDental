import { Clock3, MapPin, Navigation, Instagram, PhoneCall } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export default function ContactSection() {
  return <section className="section section-navy" id="contact">
    <div className="container contact-layout">
      <div className="contact-copy"><span className="eyebrow eyebrow-light">VISIT THE CLINIC</span><h2>Let's talk about<br/> your smile.</h2><p className="contact-lede">For treatment availability, appointment timings, and fees, please contact the clinic directly.</p>
        <div className="contact-detail"><MapPin/><div><strong>Location</strong><p>{clinicConfig.location.address}</p><a href={clinicConfig.location.mapsUrl} target="_blank" rel="noreferrer">Open directions <Navigation size={14}/></a></div></div>
        <div className="contact-detail"><PhoneCall/><div><strong>Phone</strong><p>{clinicConfig.phoneDisplay}</p><small>Contact number awaiting clinic confirmation.</small></div></div>
        {clinicConfig.openingHours.length > 0 && <div className="contact-detail"><Clock3/><div><strong>Opening hours</strong>{clinicConfig.openingHours.map(h => <p key={h.days}>{h.days}: {h.hours}</p>)}</div></div>}
        <a className="contact-social" href={clinicConfig.social.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17}/>{clinicConfig.social.instagramHandle}</a>
      </div>
      <div className="map-panel">
        {clinicConfig.location.embedUrl ? <iframe title="Clinic map" src={clinicConfig.location.embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/> : <div className="map-placeholder"><div className="map-pin-mark"><MapPin size={28}/></div><span className="eyebrow">DR. JOSHI'S DENTAL CLINIC</span><h3>Find us in Partapur</h3><p>Use the supplied directions link to view the clinic's map pin.</p><a className="button button-primary" href={clinicConfig.location.mapsUrl} target="_blank" rel="noreferrer"><Navigation size={16}/> Get directions</a></div>}
        <div className="map-caption"><MapPin size={15}/><span>{clinicConfig.location.area}</span></div>
      </div>
    </div>
  </section>;
}
