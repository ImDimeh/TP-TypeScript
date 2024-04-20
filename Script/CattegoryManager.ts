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
  updateCategory(id: string, updatedCategory: Category) {
    // Load categories from localStorage
    const categoriesString = localStorage.getItem("categories");
    let categories = categoriesString ? JSON.parse(categoriesString) : [];

    const index = categories.findIndex((category) => category.id === id);
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
  deleteCategory(id: string) {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      this.saveCategories();
    } else {
      throw new Error(`Category with id ${id} not found`);
    }
  }
}

export default CategoryManager;
