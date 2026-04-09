import Image from "next/image";
import "../../styles/banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function Banner() {
  return (
    <header className="banner">
      <div className="logo-container">
        <Image
          src="/Logo.svg"
          alt="Logo les petits plat"
          width={200}
          height={25}
        />
      </div>
      <div className="title-and-research">
        <h1>
          DÉCOUVREZ NOS RECETTES <br /> DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher une recette, un ingrédient, ..."
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="glass-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
