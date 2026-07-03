import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-brand-white py-4 px-4 sm:px-6 flex justify-center border-b border-gray-100">
      <Image
        src="/images/logo.jpg"
        alt="Fabiana Damiani — Guia Prático da Casa Organizada em 7 Dias"
        width={300}
        height={90}
        className="h-16 sm:h-20 w-auto object-contain"
        priority
      />
    </header>
  );
}
