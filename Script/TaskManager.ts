import Task from "./Task";

class TaskManager {
  tasks: Task[];

  constructor() {
    const tasksString = localStorage.getItem("tasks");
    this.tasks = tasksString ? JSON.parse(tasksString) : [];
  }

  // Méthode pour sauvegarder les tâches dans le localStorage
  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  // Méthode pour créer une nouvelle tâche
  createTask(task: Task) {
    this.tasks.push(task); // Ajoute directement la tâche passée en paramètre
    this.saveTasks();
  }

  // Méthode pour supprimer une tâche
  deleteTask(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  }

  // Méthode pour filtrer les tâches par priorité
  filterTasksByPriority(priority: "haute" | "faible" | "moyenne") {
    return this.tasks.filter((task) => task.priority === priority);
  }
  getAllTasks(): Task[] {
    const tasksString = localStorage.getItem("tasks");
    return tasksString ? JSON.parse(tasksString) : [];
  }
}



export default TaskManager;
