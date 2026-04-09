import Image from "next/image";
import "../../styles/recipeCard.css";

export function RecipeCard() {
  return (
    <a className="recipe-card-container" href="#">
      <article>
        <Image
          src="/images/banner.jpg"
          alt="Logo les petits plat"
          width={380}
          height={253}
          className="recipe-image"
        />
        <div className="card-contents">
          <h2>Limonnade de coco</h2>
          <h3>Recette</h3>
          <p>
            Mettre les glaçons à votre goût dans le blender, ajouter le lait, la
            crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu&apos;à
            avoir la consistence désirée.
          </p>
          <h3>Ingrédients</h3>
          <div className="list-ingredients">
            <ul>
              <li>
                <div className="ingredien">
                  <span>Lait de coco</span>
                  <p>400ml</p>
                </div>
              </li>
              <li>
                <div className="ingredien">
                  <span>jus de citron</span>
                  <p>2</p>
                </div>
              </li>
              <li>
                <div className="ingredien">
                  <span>Créme de coco</span>
                  <p>4 cullières</p>
                </div>
              </li>
              <li>
                <div className="ingredien">
                  <span>Sucre</span>
                  <p>20g</p>
                </div>
              </li>
              <li>
                <div className="ingredien">
                  <span>Glaçons</span>
                  <p>2</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </a>
  );
}
