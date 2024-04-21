var TaskManager = /** @class */ (function () {
    function TaskManager() {
        var tasksString = localStorage.getItem("tasks");
        this.tasks = tasksString ? JSON.parse(tasksString) : [];
    }
    // Méthode pour sauvegarder les tâches dans le localStorage
    TaskManager.prototype.saveTasks = function () {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    };
    // Méthode pour créer une nouvelle tâche
    TaskManager.prototype.createTask = function (task) {
        this.tasks.push(task); // Ajoute directement la tâche passée en paramètre
        this.saveTasks();
    };
    // Méthode pour supprimer une tâche
    TaskManager.prototype.deleteTask = function (id) {
        // Utilisation de map pour créer une nouvelle liste sans la tâche à supprimer
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        this.saveTasks();
    };
    // Méthode pour filtrer les tâches par priorité
    TaskManager.prototype.filterTasksByPriority = function (priority) {
        return this.tasks.filter(function (task) { return task.priority === priority; });
    };
    TaskManager.prototype.getAllTasks = function () {
        var tasksString = localStorage.getItem("tasks");
        return tasksString ? JSON.parse(tasksString) : [];
    };
    return TaskManager;
}());
export default TaskManager;
