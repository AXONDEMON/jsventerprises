import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import MobileFooterCTA from '../components/MobileFooterCTA';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'JSV Enterprises | Premium Steel Manufacturing in Jharkhand',
  description: 'Producers of 400 TPD Steel Billets and Structural Steel. Partners with APL APOLLO and SG Mart. Located in Barhi, Jharkhand.',
  verification: {
    google: 'vTYlO3Zd9fBbT9Un8HRWJzorsOOjmfK3RNSE',
  },
  icons: {
    icon: '/images/APLAPOLLO.NS-a86ad11d.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <TopBar />
        <Header />
        <ClientLayoutWrapper interClass={inter.variable}>
          {children}
        </ClientLayoutWrapper>
        <Footer />
        <MobileFooterCTA />
      </body>
    </html>
  );
}
