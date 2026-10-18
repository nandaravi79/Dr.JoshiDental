import { ArrowUpRight, Sparkles } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export default function Treatments({ onSelect }) {
  return <section className="section section-white" id="treatments">
    <div className="container">
      <div className="section-heading">
        <span className="eyebrow">DENTAL SERVICES</span>
        <h2>Care for every stage<br className="desktop-break"/> of your smile journey.</h2>
        <p>Explore common dental services and enquire with the clinic about availability and suitability.</p>
      </div>
      <div className="treatment-grid">
        {clinicConfig.treatments.map((treatment, i) => <article className={`treatment-card reveal ${treatment.featured ? 'treatment-featured' : ''}`} key={treatment.id}>
          <div className="treatment-card-top"><span className="treatment-index">0{i + 1}</span>{treatment.featured && <span className="pill"><Sparkles size={12}/> Featured</span>}</div>
          <div className="treatment-art" aria-hidden="true"><div className="tooth-shape">✧</div><span className="art-line art-line-one"/><span className="art-line art-line-two"/></div>
          <h3>{treatment.title}</h3>
          <p>{treatment.summary}</p>
          <button className="text-link" onClick={() => onSelect(treatment)}>Explore treatment <ArrowUpRight size={16}/></button>
        </article>)}
      </div>
    </div>
  </section>;
}
