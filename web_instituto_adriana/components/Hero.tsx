import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <Image
        src="/hero.jpg"
        alt="IES Cura Valera"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      <div className="hero-overlay">
        <h1>IES Cura Valera</h1>
      </div>
    </div>
  );
}
