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
export type DoctorId = 'sainath' | 'tulasi';

export const serviceFilters: { id: 'all' | ServiceCat; label: string }[] = [
  { id: 'all', label: 'All Treatments' },
  { id: 'ortho', label: 'Braces & Smile' },
  { id: 'surgery', label: 'Surgery & Implants' },
  { id: 'restorative', label: 'Restorative & Dentures' },
];

export interface ServiceItem {
  name: string;
  value: string;
  cat: ServiceCat;
  tag: string;
  icon: string;
  doctor: DoctorId | 'both';
  symptom: string;
  firstVisit: string;
  goodToKnow: string;
  teluguLabel: string;
  urgent?: boolean;
  blurb: string;
}

export const services: ServiceItem[] = [
  { name: 'Dental Implants', value: 'Dental Implants', cat: 'surgery', tag: 'Oral Surgery', icon: 'implant',
    doctor: 'sainath',
    symptom: 'Missing one or more teeth',
    firstVisit: 'Bone & gum check with X-ray, plus a clear timeline and total cost before you decide.',
    goodToKnow: 'Placed directly by our MDS Implantologist under gentle local numbing.',
    teluguLabel: 'డెంటల్ ఇంప్లాంట్స్',
    blurb: 'Permanent, natural-feeling tooth replacement placed by our MDS Implantologist for single or multiple missing teeth.' },
  { name: 'Braces & Clips', value: 'Braces and Clips', cat: 'ortho', tag: 'Orthodontics', icon: 'braces',
    doctor: 'tulasi',
    symptom: 'Crooked teeth, gaps, or bite issues',
    firstVisit: 'Bite assessment and side-by-side look at metal, ceramic, and self-ligating clips.',
    goodToKnow: 'For kids, teens, and adults — planned and adjusted by Dr. Tulasi every visit.',
    teluguLabel: 'బ్రేసెస్ & క్లిప్స్',
    blurb: 'Precision metal, ceramic, and self-ligating braces for children, teens, and adults to straighten teeth and correct bite alignment.' },
  { name: 'Clear Aligners', value: 'Clear Aligners', cat: 'ortho', tag: 'Orthodontics', icon: 'aligner',
    doctor: 'tulasi',
    symptom: 'Want straighter teeth without visible clips',
    firstVisit: 'Smile & bite check to see if clear trays fit your case, with expected duration.',
    goodToKnow: 'Removable for meals and brushing; doctor-supervised from start to finish.',
    teluguLabel: 'క్లియర్ అలైనర్స్',
    blurb: 'Removable, nearly invisible trays planned by our MDS Orthodontist for a discreet and comfortable smile transformation.' },
  { name: 'Root Canal Therapy', value: 'Root Canal Therapy', cat: 'restorative', tag: 'Restorative', icon: 'tooth',
    doctor: 'both',
    symptom: 'Throbbing toothache or hot/cold pain',
    firstVisit: 'X-ray to find the exact source of pain — relief often starts the very same day.',
    goodToKnow: 'Focused on saving your natural tooth comfortably with modern numbing.',
    teluguLabel: 'రూట్ కెనాల్ ట్రీట్‌మెంట్',
    urgent: true,
    blurb: 'Gentle, modern root canal treatment to relieve toothache and save your natural tooth comfortably.' },
  { name: 'Complete Dentures', value: 'Complete Dentures', cat: 'restorative', tag: 'Restorative', icon: 'denture',
    doctor: 'both',
    symptom: 'Loose dentures or difficulty chewing',
    firstVisit: 'Gentle jaw & gum measurements so the fit feels steady for eating and speaking.',
    goodToKnow: 'Unhurried trial fittings and follow-up adjustments included for seniors.',
    teluguLabel: 'కంప్లీట్ డెంచర్స్ (కట్టుడు పళ్ళు)',
    blurb: 'Custom-fitted, comfortable full and partial dentures designed for natural chewing, clear speech, and everyday confidence.' },
  { name: 'Crowns & Bridges', value: 'Crowns and Bridges', cat: 'restorative', tag: 'Restorative', icon: 'crown',
    doctor: 'both',
    symptom: 'Chipped, weak, or root-canal-treated tooth',
    firstVisit: 'Shade matching and a look at zirconia vs. ceramic options with exact pricing.',
    goodToKnow: 'Tooth-colored caps that blend naturally and protect weak teeth long-term.',
    teluguLabel: 'క్రౌన్స్ & బ్రిడ్జెస్ (క్యాప్స్)',
    blurb: 'Durable, tooth-colored zirconia and ceramic crowns and bridges to protect weak teeth and fill gaps seamlessly.' },
  { name: 'Smile Design', value: 'Smile Design', cat: 'ortho', tag: 'Cosmetic', icon: 'sparkle',
    doctor: 'tulasi',
    symptom: 'Stained, uneven, or gapped front teeth',
    firstVisit: 'Discuss what you want to change — conservative whitening, shaping, or veneers.',
    goodToKnow: 'Planned around your natural face, never an artificial "one-size" look.',
    teluguLabel: 'స్మైల్ డిజైన్',
    blurb: 'Tailored cosmetic dentistry — veneers, contouring, and whitening — planned around your natural facial proportions.' },
  { name: 'Wisdom Tooth Removal', value: 'Wisdom Tooth Removal', cat: 'surgery', tag: 'Oral Surgery', icon: 'plus',
    doctor: 'sainath',
    symptom: 'Back-jaw pain, swelling, or stuck wisdom tooth',
    firstVisit: 'X-ray to see the tooth angle and a calm walkthrough of the procedure and recovery.',
    goodToKnow: 'Minimally invasive surgical removal by an MDS Oral Surgeon — usually 20–30 mins.',
    teluguLabel: 'విజ్డమ్ టూత్ (జ్ఞానదంతం) తొలగింపు',
    urgent: true,
    blurb: 'Safe, minimally invasive surgical removal of impacted or painful wisdom teeth with smooth recovery guidance.' },
  { name: 'Gum Surgeries', value: 'Gum Surgeries', cat: 'surgery', tag: 'Oral Surgery', icon: 'waves',
    doctor: 'sainath',
    symptom: 'Bleeding, swollen, or receding gums',
    firstVisit: 'Gum health check to see if deep cleaning is enough or if targeted gum care is needed.',
    goodToKnow: 'Stops gum disease early and protects the bone supporting your natural teeth.',
    teluguLabel: 'చిగుళ్ళ చికిత్స (గమ్ సర్జరీ)',
    blurb: 'Specialized periodontal care for bleeding gums, gum recession, deep pockets, and laser/surgical gum contouring.' },
  { name: 'Jaw Fractures', value: 'Jaw Fractures', cat: 'surgery', tag: 'Oral Surgery', icon: 'shield',
    doctor: 'sainath',
    symptom: 'Fall, accident, or jaw injury',
    firstVisit: 'Immediate maxillofacial assessment — call us directly for priority guidance.',
    goodToKnow: 'Handled by Dr. Sainath (MDS Oral & Maxillofacial Surgery).',
    teluguLabel: 'దవడ ఎముక గాయాలు (జా ఫ్రాక్చర్స్)',
    urgent: true,
    blurb: 'Expert maxillofacial trauma assessment and surgical management for jaw injuries and fractures.' },
];

export const doctors: {
  id: DoctorId;
  name: string;
  shortName: string;
  teluguName: string;
  degree: string;
  photo: string;
  alt: string;
  role: string;
  shortRole: string;
  bio: string;
  short: string; // the prototypes' short label ("Dr. Tulasi")
  specialty: string;
  face: { x: number; y: number }; // where the face sits in the photo (0–1), for close-up avatars
}[] = [
  { id: 'sainath', name: 'Dr. G. Venkata Sainath', shortName: 'Dr. Sainath', teluguName: 'డా. సాయినాథ్ గారు',
    short: 'Dr. Sainath', specialty: 'MDS Oral & Maxillofacial Surgeon', face: { x: 0.405, y: 0.425 },
    degree: 'BDS, MDS', photo: 'dr-sainath.jpg',
    alt: 'Dr. G. Venkata Sainath at his consultation desk',
    role: 'Oral & Maxillofacial Surgeon · Implantologist',
    shortRole: 'Oral Surgeon & Implantologist',
    bio: 'Specializes in dental implants, painless surgical wisdom tooth removal, jaw fractures, and complex oral surgeries with a calm, reassuring bedside manner.' },
  { id: 'tulasi', name: 'Dr. K. Krishna Tulasi', shortName: 'Dr. Krishna Tulasi', teluguName: 'డా. కృష్ణ తులసి గారు',
    short: 'Dr. Tulasi', specialty: 'MDS Orthodontist', face: { x: 0.533, y: 0.39 },
    degree: 'BDS, MDS', photo: 'dr-tulasi.jpg',
    alt: 'Dr. K. Krishna Tulasi at her consultation desk',
    role: 'Orthodontist & Dentofacial Orthopaedist · Aligner Specialist',
    shortRole: 'Orthodontist & Aligner Specialist',
    bio: 'Focuses on braces & clips, clear aligners, bite correction, and smile design for children, teens, and adults — combining clinical precision with patient-first care.' },
];

export const doctorById = (id: DoctorId) => doctors.find((d) => d.id === id)!;

// Who treats what, and what the first visit looks like. Draft copy: the doctors should confirm it.
// `by` lists the doctor(s) a patient is seen by; both = whichever doctor is in at that slot.
export const care: Record<string, { by: DoctorId[]; steps: string[]; urgent?: string; concern: string }> = {
  'Dental Implants': { by: ['sainath'], concern: 'I have a missing tooth',
    steps: ['Exam and X-ray to check the bone where the tooth was', 'Implant, bridge or denture: the options and costs side by side', 'If you choose an implant, we plan the date together'] },
  'Braces and Clips': { by: ['tulasi'], concern: 'My teeth (or my child\'s) are crooked',
    steps: ['A look at the teeth, bite and jaw growth', 'Photos and X-rays for the treatment plan', 'Metal, ceramic or aligners: what fits, how long, what it costs'] },
  'Clear Aligners': { by: ['tulasi'], concern: 'I want straighter teeth, without visible braces',
    steps: ['Check whether aligners suit your teeth', 'Scans and photos to plan the movement', 'See the expected result before you decide'] },
  'Root Canal Therapy': { by: ['sainath', 'tulasi'], concern: 'A tooth hurts',
    steps: ['Find the tooth that hurts, with an X-ray', 'Pain relief first, the same visit', 'Root canal or other options, explained before we start'],
    urgent: 'Pain that keeps you up at night? Call instead of messaging, so we can fit you in sooner.' },
  'Complete Dentures': { by: ['sainath', 'tulasi'], concern: 'My dentures are loose, or I need new ones',
    steps: ['Check the gums and the old denture, if you have one', 'Measurements for a denture that fits your mouth', 'Fittings over a few visits until it feels right'] },
  'Crowns and Bridges': { by: ['sainath', 'tulasi'], concern: 'A tooth is broken, weak or has a gap',
    steps: ['Exam and X-ray of the tooth', 'Crown, bridge or filling: what the tooth needs', 'Shade matched to your other teeth'] },
  'Smile Design': { by: ['tulasi'], concern: 'I want a nicer smile',
    steps: ['Talk about what you would like to change', 'Photos of your face and smile', 'A plan: whitening, contouring, veneers or alignment'] },
  'Wisdom Tooth Removal': { by: ['sainath'], concern: 'My wisdom tooth is hurting',
    steps: ['X-ray to see how the tooth sits', 'Whether it needs to come out, and how', 'Removal the same day or a planned date, with aftercare'] },
  'Gum Surgeries': { by: ['sainath'], concern: 'My gums bleed or are pulling back',
    steps: ['Gum check and measuring the pockets', 'Cleaning first, often that is enough', 'Surgery only if the gums need it'] },
  'Jaw Fractures': { by: ['sainath'], concern: 'An injury to the jaw or face',
    steps: ['Examination and X-ray of the jaw', 'Pain and swelling under control', 'Surgery plan if the bone is broken'],
    urgent: 'A fresh injury? Please call right away; do not wait for a WhatsApp reply.' },
};

/** Path to a file in public/assets/images, with the site's base path in front. */
export const img = (file: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}assets/images/${file}`;
