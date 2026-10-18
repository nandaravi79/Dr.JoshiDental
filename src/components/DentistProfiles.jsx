import { CalendarDays, UserRound } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export default function DentistProfiles({ onBook }) {
  return <section className="section section-blush" id="dentists">
    <div className="container">
      <div className="section-heading">
        <span className="eyebrow">MEET THE DENTAL TEAM</span>
        <h2>Care begins with<br className="desktop-break"/> a conversation.</h2>
        <p>Learn about the dentists featured in the clinic's supplied promotional material.</p>
      </div>
      <div className="dentist-grid">
        {clinicConfig.dentists.map(d => <article className="dentist-card" key={d.id}>
          <div className="dentist-photo">
            {d.image ? <img src={d.image} alt={d.name} loading="lazy"/> : <div className="portrait-placeholder"><UserRound size={62} strokeWidth={1.2}/><span>Clinic portrait to be supplied</span></div>}
          </div>
          <div className="dentist-info"><span className="eyebrow">DENTAL PROFESSIONAL</span><h3>{d.name}</h3><p className="dentist-role">{d.qualification}</p><p>{d.bio}</p><button className="text-link" onClick={() => onBook(d.name)}>Enquire for a consultation <CalendarDays size={16}/></button></div>
        </article>)}
      </div>
      <p className="small-note">Names and qualifications are based on the supplied clinic artwork and should be approved by the clinic before publication. Specialty claims and unverified biographies are intentionally omitted.</p>
    </div>
  </section>;
}
