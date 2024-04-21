var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    // Méthode pour mettre à jour une catégorie
    // Méthode pour mettre à jour une catégorie
    CategoryManager.prototype.updateCategory = function (id, updatedCategory) {
        // Load categories from localStorage
        var categoriesString = localStorage.getItem("categories");
        var categories = categoriesString ? JSON.parse(categoriesString) : [];
        var index = categories.findIndex(function (category) { return category.id === id; });
        if (index !== -1) {
            // Preserve the id of the existing category
            categories[index] = __assign(__assign({}, updatedCategory), { id: id });
            // Save categories back to localStorage
            localStorage.setItem("categories", JSON.stringify(categories));
        }
        else {
            throw new Error("Category with id ".concat(id, " not found"));
        }
    };
    // Méthode pour supprimer une catégorie
    CategoryManager.prototype.deleteCategory = function (id) {
        // Utilisation de map pour créer une nouvelle liste sans l'élément à supprimer
        this.categories = this.categories.filter(function (category) { return category.id !== id; });
        this.saveCategories();
    };
    return CategoryManager;
}());
export default CategoryManager;
