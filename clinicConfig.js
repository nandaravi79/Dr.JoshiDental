export const clinicConfig = {
  name: "Dr. Joshi's Dental Clinic & Implant Centre",
  shortName: "Dr. Joshi's",
  tagline: 'Modern Smiles. Thoughtful Care.',
  eyebrow: 'PERSONALISED DENTAL CARE',
  // IMPORTANT: Replace with the clinic's confirmed number before launch.
  phoneVerified: false,
  whatsappVerified: false,
  phoneDisplay: 'Contact number to be confirmed',
  whatsappNumber: '',
  location: {
    address: 'Near Charpota Petrol Pump, Main Road, Ardhi Amba, Anand Bazar Corner, Partapur',
    area: 'Partapur',
    mapsUrl: 'https://maps.app.goo.gl/Gj3moPsxMHdjt77SA',
    embedUrl: ''
  },
  social: {
    instagramHandle: '@dr._joshi_dental_clinic',
    instagramUrl: 'https://www.instagram.com/dr._joshi_dental_clinic/'
  },
  // Hours were not verified from the supplied profile. Add only after clinic confirmation.
  openingHours: [],
  dentists: [
    {
      id: 'dhruv',
      name: 'Dr. Dhruv Joshi',
      qualification: 'BDS — as listed in supplied clinic artwork',
      role: 'Dental Surgeon',
      bio: 'Meet the dental team and discuss your oral health needs during a consultation.',
      image: ''
    },
    {
      id: 'priya',
      name: 'Dr. Priya Joshi',
      qualification: 'BDS — as listed in supplied clinic artwork',
      role: 'Dental Surgeon',
      bio: 'Meet the dental team and discuss your oral health needs during a consultation.',
      image: ''
    }
  ],
  treatments: [
    {
      id: 'implants',
      title: 'Dental Implants',
      featured: true,
      summary: 'Ask about options for replacing missing teeth and restoring everyday function.',
      details: 'Dental implants may be an option for some people with missing teeth. Suitability depends on an individual examination and assessment by a dental professional.',
      icon: 'implant'
    },
    {
      id: 'scaling',
      title: 'Teeth Cleaning & Scaling',
      featured: true,
      summary: 'Professional removal of plaque and hardened tartar as part of preventive oral care.',
      details: 'Professional scaling removes hardened deposits that regular brushing cannot remove. Your dentist can advise how often cleaning is appropriate for your oral health.',
      icon: 'cleaning'
    },
    {
      id: 'whitening',
      title: 'Teeth Whitening',
      featured: true,
      summary: 'Discuss options for reducing tooth discolouration with a dental professional.',
      details: 'Whitening options and likely results vary. A dental professional can check the cause of discolouration and explain whether whitening is suitable for you.',
      icon: 'whitening'
    },
    {
      id: 'root-canal',
      title: 'Root Canal Treatment',
      summary: 'Treatment may help manage infection inside a tooth and preserve the tooth.',
      details: 'Root canal treatment may be recommended when the pulp inside a tooth is inflamed or infected. The dentist will assess the tooth and explain suitable options.',
      icon: 'root'
    },
    {
      id: 'crowns-bridges',
      title: 'Crowns & Bridges',
      summary: 'Restorative options for damaged teeth or certain gaps caused by missing teeth.',
      details: 'Crowns and bridges are restorative options. The right treatment depends on tooth condition, bite, gum health, and an individual dental assessment.',
      icon: 'crown'
    },
    {
      id: 'orthodontics',
      title: 'Braces & Clear Aligners',
      summary: 'Ask about options for addressing tooth alignment and bite concerns.',
      details: 'Braces and clear aligners can address selected alignment concerns. A dental professional can assess your bite and explain appropriate treatment choices.',
      icon: 'align'
    },
    {
      id: 'pediatric',
      title: 'Children’s Dental Care',
      summary: 'Preventive advice and dental assessment for children.',
      details: 'Children benefit from age-appropriate oral hygiene guidance and regular dental assessments. Contact the clinic to ask about available services.',
      icon: 'child'
    },
    {
      id: 'general',
      title: 'General Dentistry',
      summary: 'Consultations for common dental concerns and preventive oral health.',
      details: 'A general dental consultation can help assess concerns, discuss preventive care, and identify whether further treatment or referral may be appropriate.',
      icon: 'general'
    }
  ],
  insights: [
    {
      id: 'scaling-myth',
      category: 'Oral health basics',
      title: 'Does dental scaling weaken teeth?',
      summary: 'Understand what professional scaling does and why gums may feel different afterwards.',
      body: 'Professional scaling removes hardened plaque (tartar) from tooth surfaces. It does not ordinarily weaken healthy enamel when performed appropriately. Some people notice temporary sensitivity, especially when inflammation or deposits are removed. Ask your dentist about symptoms that persist or concern you.'
    },
    {
      id: 'cavity',
      category: 'Preventive care',
      title: 'Why should a small cavity be checked?',
      summary: 'Early assessment can help your dentist discuss appropriate options before decay progresses.',
      body: 'Tooth decay can progress without obvious pain. A dental examination helps determine the extent of decay and whether monitoring, preventive care, a filling, or another treatment is appropriate. Do not rely on appearance alone to diagnose a cavity.'
    },
    {
      id: 'daily-care',
      category: 'Daily care',
      title: 'Simple habits for a healthier smile',
      summary: 'Daily brushing and cleaning between teeth support good oral health.',
      body: 'Brush twice daily with fluoride toothpaste and clean between teeth using floss or an appropriate interdental cleaner. Limit frequent sugary snacks and drinks, and seek dental advice if you have pain, bleeding gums, or persistent sensitivity.'
    }
  ],
  faqs: [
    {
      q: 'How can I enquire about an appointment?',
      a: 'Use the appointment enquiry form or the clinic’s verified WhatsApp contact once the number has been confirmed. An enquiry is not a confirmed booking.'
    },
    {
      q: 'Which treatments can I ask about?',
      a: 'The demo lists dental implants, scaling, whitening, root canal treatment, crowns and bridges, orthodontic options, children’s dental care, and general dentistry. Please confirm current availability with the clinic.'
    },
    {
      q: 'Does scaling weaken teeth?',
      a: 'Professional scaling removes hardened tartar and does not ordinarily weaken healthy enamel. Temporary sensitivity can occur. Ask a dentist about any persistent symptoms.'
    },
    {
      q: 'How can I find the clinic?',
      a: 'Use the supplied Google Maps directions link. Confirm the exact pin and address before publishing the final website.'
    },
    {
      q: 'How much do treatments cost?',
      a: 'Prices are not listed in this demo. Contact the clinic to ask about consultation and treatment costs.'
    }
  ]
};

export function buildWhatsAppUrl({ name = '', phone = '', treatment = '', date = '', time = '', notes = '' } = {}) {
  const number = String(clinicConfig.whatsappNumber || '').replace(/\D/g, '');
  if (!clinicConfig.whatsappVerified || number.length < 10) return null;

  const lines = [
    `Hello ${clinicConfig.name}, I would like to enquire about an appointment.`,
    name ? `Name: ${name}` : '',
    phone ? `Contact number: ${phone}` : '',
    treatment ? `Preferred treatment: ${treatment}` : '',
    date ? `Preferred date: ${date}` : '',
    time ? `Preferred time: ${time}` : '',
    notes ? `Additional note: ${notes}` : '',
    'Please let me know availability. I understand this is an enquiry, not a confirmed booking.'
  ].filter(Boolean);

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
}
