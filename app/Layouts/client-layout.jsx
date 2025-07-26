'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavbarSection from "@/components/Navbar";
import Loader from "@/components/Loader";
import FooterSection from "@/components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavbarSection />
          {children}
          <FooterSection/>
        </>
      )}
    </>
  );
}
