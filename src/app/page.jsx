"use client";

import recipes from "../../data/recipes.json";
import styles from "@/styles/page.module.css";
import { RecipeCard } from "@/components/RecipeCard/RecipeCard";
import { Filter } from "@/components/Filter/Filter";
import { Banner } from "@/components/Banner/Banner";
import { Tag } from "@/components/Tag/Tag";
import { useState } from "react";

export default function Home() {
  const [selctedTag, setSelectedTag] = useState([]);

  const addSelectedTag = (tag) => {
    setSelectedTag((item) => {
      return [...item, tag];
    });
  };

  const filtredRecipes = recipes.filter((recipe) => {
    const filterRecipe = [
      ...recipe.ingredients.map((i) => i.ingredient),
      recipe.appliance,
      ...recipe.ustensils.map((u) => u),
    ];

    return selctedTag.every((f) => filterRecipe.includes(f));
  });

  return (
    <div className={styles.page}>
      <Banner />
      <main className={styles.main}>
        <div className={styles.filters_container}>
          <div className={styles.filter_tag}>
            <div className={styles.filters}>
              <Filter
                category="Ingrédients"
                select={addSelectedTag}
                abbleRecipe={filtredRecipes}
                actifTag={selctedTag}
              />
              <Filter
                category="Appareils"
                select={addSelectedTag}
                abbleRecipe={filtredRecipes}
                actifTag={selctedTag}
              />
              <Filter
                category="Ustensiles"
                select={addSelectedTag}
                abbleRecipe={filtredRecipes}
                actifTag={selctedTag}
              />
            </div>
            <div className={styles.tags_container}>
              {selctedTag.map((item, index) => (
                <Tag key={index} name={item} />
              ))}
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
