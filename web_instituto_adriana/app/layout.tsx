import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

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
        <footer className="bg-dark text-light mt-5">
          <div className="container py-4">
            <p className="mb-0">IES Cura Valera-IAW 2º ASIR</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
