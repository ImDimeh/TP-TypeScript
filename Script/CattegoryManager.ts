import Category from "./Categorie";
class CategoryManager {
  categories: Category[];

  constructor() {
    const categoriesString = localStorage.getItem("categories");
    this.categories = categoriesString ? JSON.parse(categoriesString) : [];
  }

  // Méthode pour sauvegarder les catégories dans le localStorage
  saveCategories() {
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }

  // Méthode pour créer une nouvelle catégorie
  createCategory(category: Category) {
    this.categories.push(category);
    this.saveCategories();
  }

  // Méthode pour supprimer une catégorie
  deleteCategory(index: number) {
    if (index >= 0 && index < this.categories.length) {
      this.categories.splice(index, 1);
      this.saveCategories();
    }
  }
}

export default CategoryManager;
