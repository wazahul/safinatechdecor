// config/company.ts
export const companyConfig = {
  name: 'Safina Tech-Decor',
  legalName: 'Safina Tech-Decor',
  tagline: 'Complete Interior & Smart Solutions Since 2000',
  foundedYear: 2000,
  owner: 'Abdul Qamar Shaikh',
  email: 'wazahul@gmail.com',
  phone: '+917021330886',
  phoneDisplay: '+91 7021330886',
  whatsappNumber: '917021330886',
  address: {
    city: 'Mumbai',
    region: 'Maharashtra',
    country: 'India',
    fullAddress: 'Mumbai, Maharashtra, India',
  },
  socials: {
    whatsappLink: 'https://wa.me/917021330886',
  },

  // 🛠️ CLOUDINARY CONFIG (Zaroori)
  cloudinary: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dx2wvdelp",
    baseUrl: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dx2wvdelp"}/image/upload`,
  },


  // 🛠️ PORTFOLIO DATA (Iske bina map error aa raha tha)
  portfolio: [
    { id: 1, category: "Office", path: "service-commercial.jpg", title: "Smart Corporate Office" },
    { id: 2, category: "Office", path: "service-commercial.jpg", title: "Executive Cabin" },
    { id: 10, category: "Bedroom", path: "MBedroom-1.jpg", title: "Minimal Master Suite" },
    { id: 11, category: "Bedroom", path: "MBedroom-2.jpg", title: "Minimal Master Suite" },
    { id: 12, category: "Bedroom", path: "CBedroom-1.jpg", title: "Minimal Master Suite" },
    { id: 13, category: "Bedroom", path: "CBedroom-2.jpg", title: "Minimal Master Suite" },
    { id: 20, category: "Living Room", path: "service-interior.jpg", title: "Luxury Accent Lounge" },
    { id: 30, category: "Kitchen", path: "Kitchen-1.jpg", title: "Italian Modular Kitchen" },
  ],

  services: [
    { id: 'interior-design', title: 'Interior Design', shortDesc: 'Bespoke residential & commercial spatial layouts crafted for premium aesthetics.', category: 'Decor' },
    { id: 'civil-work', title: 'Civil Work', shortDesc: 'Precision structural, flooring, masonry, and architectural renovations.', category: 'Core' },
    { id: 'carpentry', title: 'Carpentry', shortDesc: 'Custom premium modular furniture, acoustic paneling, and wood crafts.', category: 'Decor' },
    { id: 'electrical-work', title: 'Electrical Work', shortDesc: 'Safe, certified high-end wiring, distribution, and smart lighting systems.', category: 'Infrastructure' },
    { id: 'cctv-installation', title: 'CCTV Installation', shortDesc: 'Advanced IP cameras, NVR configuration, and remote feed monitoring.', category: 'Surveillance' },
    { id: 'biometric-systems', title: 'Biometric Systems', shortDesc: 'Secure physical access management using dynamic scanners and facial recognition.', category: 'Security' },
    { id: 'intercom-systems', title: 'Intercom Systems', shortDesc: 'Reliable high-fidelity EPABX and digital building communication nodes.', category: 'Security' },
  ],
} as const;

export type ServiceId = typeof companyConfig.services[number]['id'];