"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";

const FooterWrapper = () => {
  const pathname = usePathname();

  // ❌ Do not show footer on home route "/"
  if (pathname === "/") return null;

  return <Footer />;
};

export default FooterWrapper;
