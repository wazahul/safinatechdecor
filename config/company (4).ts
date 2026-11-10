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
  
  // Cloudinary Settings
  cloudinary: {
    cloudName: "dx2wvdelp",
    // Base URL ko clean rakhte hain
    baseUrl: `https://res.cloudinary.com/dx2wvdelp/image/upload`,
  },

  portfolio: [
    // 🛠️ FIX: Path ko filename 'service-tech.jpg' se update kiya
    { id: 1, category: "Office", path: "service-tech.jpg", title: "Smart Corporate Office" },
    { id: 2, category: "Office", path: "service-tech.jpg", title: "Executive Cabin" },
    { id: 10, category: "Bedroom", path: "service-tech.jpg", title: "Minimal Master Suite" },
    { id: 20, category: "Living Room", path: "service-tech.jpg", title: "Luxury Accent Lounge" },
    { id: 30, category: "Kitchen", path: "service-tech.jpg", title: "Italian Modular Kitchen" },
  ],

  services: [
    { id: 'interior-design', title: 'Interior Design', shortDesc: 'Bespoke residential & commercial spatial layouts.', category: 'Decor' },
    { id: 'civil-work', title: 'Civil Work', shortDesc: 'Precision structural and architectural renovations.', category: 'Core' },
    { id: 'carpentry', title: 'Carpentry', shortDesc: 'Custom premium modular furniture and wood crafts.', category: 'Decor' },
    { id: 'electrical-work', title: 'Electrical Work', shortDesc: 'Certified high-end wiring and smart lighting.', category: 'Infrastructure' },
    { id: 'cctv-installation', title: 'CCTV Installation', shortDesc: 'Advanced IP cameras and NVR configuration.', category: 'Surveillance' },
    { id: 'biometric-systems', title: 'Biometric Systems', shortDesc: 'Secure physical access management systems.', category: 'Security' },
  ],
} as const;

export type ServiceId = typeof companyConfig.services[number]['id'];