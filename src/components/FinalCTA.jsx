import { ArrowUpRight, CalendarDays } from 'lucide-react';

export default function FinalCTA({ onBook }) {
  return <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow">YOUR NEXT STEP</span><h2>Your smile deserves<br/> thoughtful care.</h2><p>Have a question about a dental treatment? Start an appointment enquiry with the clinic.</p></div><button className="button button-light" onClick={onBook}><CalendarDays size={17}/> Enquire for an appointment <ArrowUpRight size={16}/></button></div></section>;
}
