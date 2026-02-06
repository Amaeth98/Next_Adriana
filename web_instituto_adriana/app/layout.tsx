import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IES Cura Valera",
  description: "Web del instituto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Hero />
        <Navbar />
        <main className="container py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
