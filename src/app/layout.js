import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
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
        <ClientLayoutWrapper montserratClass={montserrat.variable} openSansClass={openSans.variable}>
          {children}
        </ClientLayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
