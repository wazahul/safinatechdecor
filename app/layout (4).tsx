// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { companyConfig } from '@/config/company';

export const metadata: Metadata = {
  title: `${companyConfig.name} - Complete Interior & Smart Infrastructure Solutions`,
  description: `${companyConfig.tagline}. High-end interior decoration, precision architectural drafting, carpentry, and corporate digital security installations across Mumbai.`,
  keywords: [
    'Interior Design Mumbai', 
    'Security Surveillance systems', 
    '3D LiDAR space scanning', 
    'Biometrics installation', 
    'Complete Interior Solutions'
  ],
  // SEO Recommendation: Add openGraph for better social sharing
  openGraph: {
    title: companyConfig.name,
    description: companyConfig.tagline,
    type: 'website',
    locale: 'en_IN',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* 🛠️ FIX: Added 'data-scroll-behavior="smooth"' to resolve Next.js console warning */
    <html 
      lang="en" 
      className="scroll-smooth" 
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        {/* pt-20 ensures content starts below the fixed navbar */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}