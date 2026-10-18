import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return <section className="section section-white" id="faq">
    <div className="container faq-layout">
      <div><span className="eyebrow">NEED TO KNOW</span><h2>Questions, answered.</h2><p>For personal advice, contact the clinic and arrange an assessment.</p></div>
      <div className="faq-list">{clinicConfig.faqs.map((item, i) => <div className={`faq-item ${open === i ? 'faq-open' : ''}`} key={item.q}>
        <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{item.q}</span><ChevronDown size={18}/></button>
        {open === i && <p>{item.a}</p>}
      </div>)}</div>
    </div>
  </section>;
}
