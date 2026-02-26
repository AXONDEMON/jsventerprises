import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'JSV Enterprises | Premium Steel Manufacturing in Jharkhand',
  description: 'Producers of 400 TPD Steel Billets and Structural Steel. Partners with APL APOLLO and SG Mart. Located in Barhi, Jharkhand.',
  verification: {
    google: 'vTYlO3Zd9fBbT9Un8HRWJzorsOOjmfK3RNSE',
  },
  icons: {
    icon: '/images/aplapollo_logo.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        <ClientLayoutWrapper interClass={inter.variable} spaceGroteskClass={spaceGrotesk.variable}>
          {children}
        </ClientLayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
