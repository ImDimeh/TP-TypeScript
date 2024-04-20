var CategoryManager = /** @class */ (function () {
    function CategoryManager() {
        var categoriesString = localStorage.getItem("categories");
        this.categories = categoriesString ? JSON.parse(categoriesString) : [];
    }
    // Méthode pour sauvegarder les catégories dans le localStorage
    CategoryManager.prototype.saveCategories = function () {
        localStorage.setItem("categories", JSON.stringify(this.categories));
    };
    // Méthode pour créer une nouvelle catégorie
    CategoryManager.prototype.createCategory = function (category) {
        this.categories.push(category);
        this.saveCategories();
    };
    // Méthode pour supprimer une catégorie
    CategoryManager.prototype.deleteCategory = function (index) {
        if (index >= 0 && index < this.categories.length) {
            this.categories.splice(index, 1);
            this.saveCategories();
        }
    };
    return CategoryManager;
}());
export default CategoryManager;
