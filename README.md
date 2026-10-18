# Dr. Joshi's Dental Clinic & Implant Centre — Website Demo

A responsive React + Vite website demo with the clinic's pink identity, treatment information, dentist profiles, dental education, appointment enquiry flow, location link, FAQs, and responsive navigation.

## Run locally

Requires a recent Node.js LTS release.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:3000`).

Build and preview:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Upload the entire project folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel should detect Vite. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy. No environment variables are required for this static demo.

## Update clinic information

Edit `src/data/clinicConfig.js`.

- Replace the WhatsApp number only after the clinic confirms it.
- Set `whatsappVerified: true` only after confirming the number is correct.
- Update `phoneDisplay`, address, maps URL, hours, dentist details, treatments, and social links after approval.
- To embed a map, add a valid Google Maps embed URL to `location.embedUrl`. Otherwise, the directions link remains available.
- Replace the gallery placeholders with clinic-owned or properly licensed assets. Obtain patient consent before publishing identifiable patient images or treatment results.
- Confirm qualifications and biographies with the clinic before publishing.

## Important demo behavior

- The appointment form does not save data to a server. After the verified WhatsApp number is configured, it opens a prefilled WhatsApp enquiry.
- While the number remains unverified, the form displays an explanatory message and does not send data to a placeholder number.
- No real patient testimonials, opening hours, clinic photos, or unverified contact details are fabricated.
- The gallery uses intentional placeholders until approved images are supplied.

## Project notes

This project uses plain CSS rather than Tailwind, so Tailwind/PostCSS configuration is not required. The Vercel deployment is a static Vite build. There are no API keys or secrets in the frontend.
