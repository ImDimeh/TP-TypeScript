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

  // Méthode pour mettre à jour une catégorie
  // Méthode pour mettre à jour une catégorie
  updateCategory(id: number, updatedCategory: Category) {
    // Load categories from localStorage
    const categoriesString = localStorage.getItem("categories");
    let categories = categoriesString ? JSON.parse(categoriesString) : [];

    const index = categories.findIndex(
      (category: Category) => category.id === id
    );
    if (index !== -1) {
      // Preserve the id of the existing category
      categories[index] = { ...updatedCategory, id };

      // Save categories back to localStorage
      localStorage.setItem("categories", JSON.stringify(categories));
    } else {
      throw new Error(`Category with id ${id} not found`);
    }
  }
  // Méthode pour supprimer une catégorie
  deleteCategory(id: number) {
    // Utilisation de map pour créer une nouvelle liste sans l'élément à supprimer
    this.categories = this.categories.filter(
      (category: Category) => category.id !== id
    );
    this.saveCategories();
  }
}

export default CategoryManager;
