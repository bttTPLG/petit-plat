import Image from "next/image";
import styles from "./page.module.css";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Filter } from "./components/Filter/Filter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.filters_container}>
          <div className={styles.filters}>
            <Filter />
          </div>
          <div className={styles.counter_recipes}>
            <p>50 recettes</p>
          </div>
        </div>
        <div className={styles.recipes_container}>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </main>
    </div>
  );
}
