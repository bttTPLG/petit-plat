"use client";

import "@/styles/filter.css";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Filter({ category, select, abbleRecipe, actifTag }) {
  const [isOpen, setIsOpen] = useState(false);

  let list = [];

  abbleRecipe.forEach((recipe) => {
    if (category === "Ingrédients") {
      recipe.ingredients.forEach((item) => {
        list.push(item.ingredient);
      });
    }
    if (category === "Appareils") {
      list.push(recipe.appliance);
    }
    if (category === "Ustensiles") {
      recipe.ustensils.forEach((u) => {
        list.push(u);
      });
    }
  });

  const result = [...new Set(list)];

  return (
    <div className="filter">
      <button onClick={() => setIsOpen(!isOpen)}>
        {category} <FontAwesomeIcon icon={faAngleDown} className="arrow" />
      </button>
      {isOpen ? (
        <div className="filter-content">
          <SearchBar placeholderText={""} />
          <ul className="filter-list">
            {result
              .filter((tag) => !actifTag.includes(tag))
              .map((tag, index) => (
                <li key={index} onClick={() => select(tag)}>
                  {tag}
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
