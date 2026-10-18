import { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';
import Modal from './Modal';

const items = [
  { title: 'Clinic photography', label: 'Add an approved clinic photo' },
  { title: 'Dental care', label: 'Add an authorised treatment photo' },
  { title: 'Smile gallery', label: 'Add consented patient images' },
  { title: 'Clinic team', label: 'Add approved team photography' }
];

export default function SmileGallery() {
  const [active, setActive] = useState(null);
  return <section className="section section-white" id="gallery">
    <div className="container">
      <div className="section-heading section-heading-row">
        <div><span className="eyebrow">A LOOK INSIDE</span><h2>Our clinic & smile gallery.</h2></div>
        <p>Gallery placeholders are intentional. Replace them with clinic-owned images and obtain consent before publishing patient photographs or treatment results.</p>
      </div>
      <div className="gallery-grid">
        {items.map((item, i) => <button className={`gallery-tile gallery-tile-${i + 1}`} key={item.title} onClick={() => setActive(item)} aria-label={`View ${item.title} placeholder`}>
          <span className="gallery-placeholder"><ImageIcon size={28}/><strong>{item.title}</strong><small>{item.label}</small></span>
          <span className="gallery-number">0{i + 1}</span>
        </button>)}
      </div>
    </div>
    {active && <Modal title={active.title} onClose={() => setActive(null)}><p className="form-intro">{active.label}. Use high-quality images that the clinic is authorised to publish. Do not label stock images as real patient results.</p></Modal>}
  </section>;
}
