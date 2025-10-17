import Image from 'next/image';

export default function AdditionalImageSection() {
  return (
    <section className="additional-image-section">
      <div className="full-width-container">
        <Image 
          src="/img2.png" 
          alt="Additional restaurant image" 
          className="img-fluid additional-image"
          width={1920}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
}