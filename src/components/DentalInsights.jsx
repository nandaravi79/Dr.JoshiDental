import { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import Modal from './Modal';

export default function DentalInsights() {
  const [article, setArticle] = useState(null);
  return <section className="section section-blush" id="insights">
    <div className="container">
      <div className="section-heading"><span className="eyebrow">SMILE EDUCATION</span><h2>Clear answers.<br className="desktop-break"/> Healthier habits.</h2><p>Educational topics inspired by the clinic's social content and common oral-health questions.</p></div>
      <div className="insight-grid">
        {clinicConfig.insights.map((item, i) => <article className="insight-card" key={item.id}><div className="insight-top"><BookOpen size={19}/><span>{item.category}</span></div><h3>{item.title}</h3><p>{item.summary}</p><button className="text-link" onClick={() => setArticle(item)}>Read article <ArrowUpRight size={16}/></button></article>)}
      </div>
    </div>
    {article && <Modal title={article.title} onClose={() => setArticle(null)}><p className="article-body">{article.body}</p><p className="medical-note">General educational information only. It does not replace a dental examination or individual professional advice.</p></Modal>}
  </section>;
}
