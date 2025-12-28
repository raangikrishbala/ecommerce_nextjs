import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScriptsLoader from "@/components/ScriptsLoader";

export const metadata: Metadata = {
  title: "Mega Store - Your One-Stop E-commerce Solution",
  description: "Shop for products, services, events, automotive and more",
  keywords: "ecommerce, marketplace, products, services, events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/assets/images/icons/favicon.png" />
        
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        
        {/* Main CSS */}
        <link rel="stylesheet" href="/assets/css/mega_style.css" />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="/assets/vendor/fontawesome-free/css/all.min.css" />
      </head>
      <body className="loaded">
        <Header />
        {children}
        <Footer />
        
        {/* Scroll to top button */}
        <a id="scroll-top" href="#top" title="Top" role="button">
          <i className="icon-angle-up"></i>
        </a>

        {/* Scripts */}
        <ScriptsLoader />
      </body>
    </html>
  );
}
