import { useEffect, useState } from 'react';
import { CalendarDays, MessageCircle, AlertCircle } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../data/clinicConfig';
import Modal from './Modal';

const emptyForm = { name: '', phone: '', treatment: 'General Consultation', date: '', time: '', notes: '', consent: false };

export default function AppointmentForm({ isOpen, onClose, initialTreatment = '' }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setForm({ ...emptyForm, treatment: initialTreatment || 'General Consultation' });
      setError('');
    }
  }, [isOpen, initialTreatment]);

  if (!isOpen) return null;
  const update = (key, value) => setForm(current => ({ ...current, [key]: value }));
  const whatsappUrl = buildWhatsAppUrl(form);

  function handleSubmit(event) {
    event.preventDefault();
    setError('');
    if (!form.consent) {
      setError('Please confirm that the clinic may contact you about this enquiry.');
      return;
    }
    if (!whatsappUrl) {
      setError('The clinic WhatsApp number has not yet been verified. Please contact the clinic directly using its confirmed contact details.');
      return;
    }
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  }

  return <Modal title="Enquire for an appointment" onClose={onClose}>
    <p className="form-intro">Share your preferred details. This form opens WhatsApp; it does not confirm an appointment or save your information on this website.</p>
    <form className="appointment-form" onSubmit={handleSubmit}>
      <label>Full name<input autoComplete="name" required maxLength={80} value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name"/></label>
      <label>Mobile number<input autoComplete="tel" type="tel" required inputMode="tel" pattern="[0-9+() -]{8,18}" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="Your contact number"/></label>
      <div className="form-two">
        <label>Preferred treatment<select value={form.treatment} onChange={e => update('treatment', e.target.value)}>
          <option>General Consultation</option>
          {clinicConfig.treatments.map(t => <option key={t.id}>{t.title}</option>)}
        </select></label>
        <label>Preferred date<input type="date" min={new Date().toISOString().slice(0, 10)} value={form.date} onChange={e => update('date', e.target.value)} /></label>
      </div>
      <label>Preferred time (optional)<select value={form.time} onChange={e => update('time', e.target.value)}>
        <option value="">No preference</option><option>Morning</option><option>Afternoon</option><option>Evening</option>
      </select></label>
      <label>Additional note (optional)<textarea rows="3" maxLength={400} value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Optional, non-sensitive details"/></label>
      <label className="consent-row"><input type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)}/><span>I agree that the clinic may contact me about this appointment enquiry.</span></label>
      {error && <p className="form-error" role="alert"><AlertCircle size={17}/>{error}</p>}
      <button className="button button-primary button-full" type="submit"><MessageCircle size={17}/> Continue to WhatsApp</button>
      {!clinicConfig.whatsappVerified && <p className="form-note">Demo mode: the clinic's WhatsApp number must be verified before this action can be used.</p>}
    </form>
  </Modal>;
}
