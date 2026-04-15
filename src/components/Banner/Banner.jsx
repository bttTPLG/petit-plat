import Image from "next/image";
import "@/styles/banner.css";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import Link from "next/link";

export function Banner({ withSearchBar = true }) {
  return (
    <header className="banner">
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
      {withSearchBar ? (
        <div className="title-and-research">
          <h1>
            DÉCOUVREZ NOS RECETTES <br /> DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
          </h1>
          <SearchBar
            placeholderText={"Rechercher une recette, un ingrédient, ..."}
          />
        </div>
      ) : null}
    </header>
  );
}
