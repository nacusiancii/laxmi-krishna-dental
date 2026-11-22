// Everything about the clinic in one place. Components read from here,
// so a phone number or a new treatment changes once, not in five spots.

export const clinic = {
  name: 'Laxmi Krishna Multispeciality Dental Clinic',
  shortName: 'Laxmi Krishna Dental',
  tagline: 'Healthy Smiles, Happy Lives',
  phone: '+918331920026',
  phoneDisplay: '+91 83319 20026',
  phoneShort: '83319 20026',
  email: 'lakshmikrishnadental@gmail.com',
  instagram: 'https://www.instagram.com/laxmikrishna_dental/',
  instagramHandle: '@laxmikrishna_dental',
  mapsUrl: 'https://maps.app.goo.gl/7r3gbYphd64KgF1x5',
  mapsEmbed: 'https://www.google.com/maps?q=15.8358114,78.0202875&z=16&output=embed',
  landmark: 'Beside HP Petrol Bunk, Venkata Ramana Colony',
  addressLines: ['Beside HP Petrol Bunk, Venkata Ramana Colony,', 'Kurnool – 518003, Andhra Pradesh'],
  geo: { lat: 15.8358114, lng: 78.0202875 },
};

export const whatsappNumber = clinic.phone.replace('+', '');
export const whatsappLink = (text = 'Hello Laxmi Krishna Dental, I would like to book an appointment.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

// Opening hours, in clinic time (IST). Minutes since midnight. Days: 0 = Sunday.
export const sessions = [
  { label: 'Mon – Sat (Morning)', slot: 'Morning (10:00 AM – 2:00 PM)', hours: '10:00 AM – 2:00 PM', days: [1, 2, 3, 4, 5, 6], from: 600, to: 840 },
  { label: 'Mon – Sat (Evening)', slot: 'Evening (5:30 PM – 8:30 PM)', hours: '5:30 PM – 8:30 PM', days: [1, 2, 3, 4, 5, 6], from: 1050, to: 1230 },
  { label: 'Sunday', slot: 'Sunday (11:00 AM – 1:00 PM)', hours: '11:00 AM – 1:00 PM', days: [0], from: 660, to: 780 },
];

export type ServiceCat = 'ortho' | 'surgery' | 'restorative';

export const serviceFilters: { id: 'all' | ServiceCat; label: string }[] = [
  { id: 'all', label: 'All Treatments' },
  { id: 'ortho', label: 'Braces & Smile' },
  { id: 'surgery', label: 'Surgery & Implants' },
  { id: 'restorative', label: 'Restorative & Dentures' },
];

export const services: { name: string; value: string; cat: ServiceCat; tag: string; icon: string; blurb: string }[] = [
  { name: 'Dental Implants', value: 'Dental Implants', cat: 'surgery', tag: 'Oral Surgery', icon: 'implant',
    blurb: 'Permanent, natural-feeling tooth replacement placed by our MDS Implantologist for single or multiple missing teeth.' },
  { name: 'Braces & Clips', value: 'Braces and Clips', cat: 'ortho', tag: 'Orthodontics', icon: 'braces',
    blurb: 'Precision metal, ceramic, and self-ligating braces for children, teens, and adults to straighten teeth and correct bite alignment.' },
  { name: 'Clear Aligners', value: 'Clear Aligners', cat: 'ortho', tag: 'Orthodontics', icon: 'aligner',
    blurb: 'Removable, nearly invisible trays planned by our MDS Orthodontist for a discreet and comfortable smile transformation.' },
  { name: 'Root Canal Therapy', value: 'Root Canal Therapy', cat: 'restorative', tag: 'Restorative', icon: 'tooth',
    blurb: 'Gentle, modern root canal treatment to relieve toothache and save your natural tooth comfortably.' },
  { name: 'Complete Dentures', value: 'Complete Dentures', cat: 'restorative', tag: 'Restorative', icon: 'denture',
    blurb: 'Custom-fitted, comfortable full and partial dentures designed for natural chewing, clear speech, and everyday confidence.' },
  { name: 'Crowns & Bridges', value: 'Crowns and Bridges', cat: 'restorative', tag: 'Restorative', icon: 'crown',
    blurb: 'Durable, tooth-colored zirconia and ceramic crowns and bridges to protect weak teeth and fill gaps seamlessly.' },
  { name: 'Smile Design', value: 'Smile Design', cat: 'ortho', tag: 'Cosmetic', icon: 'sparkle',
    blurb: 'Tailored cosmetic dentistry — veneers, contouring, and whitening — planned around your natural facial proportions.' },
  { name: 'Wisdom Tooth Removal', value: 'Wisdom Tooth Removal', cat: 'surgery', tag: 'Oral Surgery', icon: 'plus',
    blurb: 'Safe, minimally invasive surgical removal of impacted or painful wisdom teeth with smooth recovery guidance.' },
  { name: 'Gum Surgeries', value: 'Gum Surgeries', cat: 'surgery', tag: 'Oral Surgery', icon: 'waves',
    blurb: 'Specialized periodontal care for bleeding gums, gum recession, deep pockets, and laser/surgical gum contouring.' },
  { name: 'Jaw Fractures', value: 'Jaw Fractures', cat: 'surgery', tag: 'Oral Surgery', icon: 'shield',
    blurb: 'Expert maxillofacial trauma assessment and surgical management for jaw injuries and fractures.' },
];

export const doctors = [
  { name: 'Dr. G. Venkata Sainath', degree: 'BDS, MDS', photo: 'dr-sainath.jpg',
    alt: 'Dr. G. Venkata Sainath at his consultation desk',
    role: 'Oral & Maxillofacial Surgeon · Implantologist',
    bio: 'Specializes in dental implants, painless surgical wisdom tooth removal, jaw fractures, and complex oral surgeries with a calm, reassuring bedside manner.' },
  { name: 'Dr. K. Krishna Tulasi', degree: 'BDS, MDS', photo: 'dr-tulasi.jpg',
    alt: 'Dr. K. Krishna Tulasi at her consultation desk',
    role: 'Orthodontist & Dentofacial Orthopaedist · Aligner Specialist',
    bio: 'Focuses on braces & clips, clear aligners, bite correction, and smile design for children, teens, and adults — combining clinical precision with patient-first care.' },
];

/** Path to a file in public/assets/images, with the site's base path in front. */
export const img = (file: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}assets/images/${file}`;
