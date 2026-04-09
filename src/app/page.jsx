import Image from "next/image";
import styles from "./page.module.css";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
