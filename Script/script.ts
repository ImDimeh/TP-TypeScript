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

// Ajout d'un écouteur d'événement sur la soumission du formulaire
taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupération des valeurs des champs de formulaire
    const taskTitle = taskTitleInput.value;
    const taskDescription = taskDescriptionTextarea.value;
    const taskDueDate = taskDueDateInput.value;
    const taskPriority = taskPrioritySelect.value;

    // Affichage des valeurs dans la console
    console.log("Titre de la tâche :", taskTitle);
    console.log("Description de la tâche :", taskDescription);
    console.log("Date d'échéance de la tâche :", taskDueDate);
    console.log("Priorité de la tâche :", taskPriority);

    // Création d'une nouvelle tâche
    const task = new Task(taskTitle, taskDescription, taskDueDate, taskPriority);

    // Ajout de la tâche à la liste des tâches
    taskManager.addTask(task);

    // Réinitialisation du formulaire
    taskForm.reset();
  }
);



console.log('test ts')
