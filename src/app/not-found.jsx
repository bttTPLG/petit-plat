import Image from "next/image";
import "@/styles/no-found.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <header className="banner-nofound">
      <div className="logo-container">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Logo les petits plat"
            width={200}
            height={25}
          />
        </Link>
      </div>
      <div className="title">
        <h1>404 </h1>
        <p>La page que vous demandez est introuvable.</p>
      </div>
      <div className="calc"></div>
    </header>
  );
}
