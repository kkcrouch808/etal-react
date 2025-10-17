import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Image 
        src="/topimg.webp" 
        alt="Restaurant food display" 
        fill
        style={{ objectFit: 'cover', objectPosition: 'center center' }}
        priority
      />
    </section>
  );
}