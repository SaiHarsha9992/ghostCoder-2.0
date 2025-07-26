import "./globals.css";
import { Orbitron, Space_Grotesk } from 'next/font/google';
import ClientLayout from "./Layouts/client-layout";
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['500', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: {
    default: "ghostCoder",
    template: "%s - ghostCoder",
  },
  description: "Learn fast Coding and DSA",
  openGraph: {
    title: "ghostCoder",
    description: "Learn fast Coding and DSA",
    url: "https://ghost-coderr.vercel.app",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/367c78b8-b443-4d90-9b92-c620cdc56df3.png?token=5SpY9URG8XKidAjLpCYr5BzaWPBlN2H0yVqa_xoXVwc&height=630&width=1200&expires=33277508177",
        width: 1200,
        height: 630,
        alt: "ghostCoder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ghostCoder",
    description: "Learn fast Coding and DSA",
    images: [
      "https://opengraph.b-cdn.net/production/images/367c78b8-b443-4d90-9b92-c620cdc56df3.png?token=5SpY9URG8XKidAjLpCYr5BzaWPBlN2H0yVqa_xoXVwc&height=630&width=1200&expires=33277508177",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceGrotesk.variable} antialiased bg-[#0B0F11] text-white font-body`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
