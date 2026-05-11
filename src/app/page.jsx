"use client";

import recipes from "../../data/recipes.json";
import styles from "@/styles/page.module.css";
import { RecipeCard } from "@/components/RecipeCard/RecipeCard";
import { Filter } from "@/components/Filter/Filter";
import { Banner } from "@/components/Banner/Banner";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Tag } from "@/components/Tag/Tag";
import { useState } from "react";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState({
    ingredients: [],
    ustensils: [],
    appliances: [],
  });

  const addSelectedTag = (category, tag) => {
    setSelectedTag((prev) => ({
      ...prev,
      [category]: [...prev[category], tag],
    }));
  };

  const filtredRecipes = recipes.filter((recipe) => {
    const recipeIngredients = recipe.ingredients.map((i) =>
      i.ingredient.toLowerCase(),
    );

    const recipeAppliance = recipe.appliance.toLowerCase();

    const recipeUstensils = recipe.ustensils.map((u) => u.toLowerCase());

    const ingredientsMatch = selectedTag.ingredients.every((tag) =>
      recipeIngredients.includes(tag.toLowerCase()),
    );

    const appliancesMatch = selectedTag.appliances.every((tag) =>
      recipeAppliance.includes(tag.toLowerCase()),
    );

    const ustensilsMatch = selectedTag.ustensils.every((tag) =>
      recipeUstensils.includes(tag.toLowerCase()),
    );

    return ingredientsMatch && appliancesMatch && ustensilsMatch;
  });

  return (
    <div className={styles.page}>
      <Banner>
        <div className="title-and-research">
          <h1>
            DÉCOUVREZ NOS RECETTES <br /> DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
          </h1>
          <SearchBar
            placeholderText={"Rechercher une recette, un ingrédient, ..."}
          />
        </div>
      </Banner>
      <main className={styles.main}>
        <div className={styles.filters_container}>
          <div className={styles.filter_tag}>
            <div className={styles.filters}>
              <Filter
                name="Ingrédients"
                category="ingredients"
                select={addSelectedTag}
                abbleRecipe={filtredRecipes}
                actifTag={selectedTag}
              />
              <Filter
                name="Appareils"
                category="appliances"
                select={addSelectedTag}
                abbleRecipe={filtredRecipes}
                actifTag={selectedTag}
              />
              <Filter
                name="Ustensiles"
                category="ustensils"
                select={addSelectedTag}
                abbleRecipe={filtredRecipes}
                actifTag={selectedTag}
              />
            </div>
            <div className={styles.tags_container}>
              <div>
                {selectedTag.ingredients.map((item, index) => (
                  <Tag key={index} name={item} />
                ))}
              </div>
              <div>
                {selectedTag.appliances.map((item, index) => (
                  <Tag key={index} name={item} />
                ))}
              </div>
              <div>
                {selectedTag.ustensils.map((item, index) => (
                  <Tag key={index} name={item} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.counter_recipes}>
            <p>
              {filtredRecipes.length}{" "}
              {filtredRecipes.length > 1 ? "recettes" : "recette"}
            </p>
          </div>
        </div>
        <div className={styles.recipes_container}>
          {filtredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}
