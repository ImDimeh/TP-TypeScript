import CategoryManager from "./CattegoryManager"
import Category from "./Categorie"
import Task from "./Task"
import TaskManager from "./TaskManager";



// Sélection des éléments du formulaire
const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const taskTitleInput = document.getElementById("taskTitle") as HTMLInputElement;
const taskDescriptionTextarea = document.getElementById("taskDescription") as HTMLTextAreaElement;
const taskDueDateInput = document.getElementById("taskDueDate") as HTMLInputElement;
const taskPrioritySelect = document.getElementById("taskPriority") as HTMLSelectElement;
const addButton = document.getElementById("Addtache") as HTMLButtonElement;

// Création d'une instance de TaskManager
const taskManager = new TaskManager();

// Ajout d'un écouteur d'événement sur la soumission du formulaire
taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupération des valeurs des champs de formulaire
    const taskTitle = taskTitleInput.value;
    const taskDescription = taskDescriptionTextarea.value;
    const taskDueDate = taskDueDateInput.value;
    const taskPriority = taskPrioritySelect.value;

    // Création d'une nouvelle tâche
    const newTask: Task = {
        titre: taskTitle,
        description: taskDescription,
        date: Date.now(), // Exemple de date actuelle, à remplacer par la valeur réelle
        priority: taskPriority as "haute" | "faible" | "moyenne", // Conversion de string en type priorité
        id: 0, // Remplacer par un vrai ID
        createTask: () => {}, // Méthode bidon, à remplacer si nécessaire
        deleteTask: () => {}, // Méthode bidon, à remplacer si nécessaire
        filtersTask: () => {} // Méthode bidon, à remplacer si nécessaire
    };

    // Ajout de la tâche à la liste des tâches dans TaskManager
    taskManager.createTask(newTask);

    // Réinitialisation du formulaire
    taskForm.reset();
});



console.log('test ts')
