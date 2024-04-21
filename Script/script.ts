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

window.addEventListener("load", () => {
  console.log("task chargé")
  const tasks = taskManager.getAllTasks();
  const tasksContainer = document.getElementById("tasks");

  if (tasksContainer) {
    tasks.forEach((task) => {
      const taskDiv = document.createElement("div");
      if (task.priority === "haute") {
        taskDiv.classList.add("task", 'task high');

      } else if (task.priority === "moyenne") {
        taskDiv.classList.add("task", "task medium");

      } else if (task.priority === "faible") { 
        taskDiv.classList.add("task", "task low");

      }

      

      const taskTitle = document.createElement("h3");
      taskTitle.textContent = `${task.titre} <span>– Priorité ${
        task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
      }</span>`;

      const taskDate = document.createElement("p");
      taskDate.textContent = `Date d'échéance: ${task.date}`;

      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.description;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Supprimer";
     
      const editButton = document.createElement("button");
      editButton.textContent = "Modifier";
      editButton.classList.add("edit-btn");
      

      taskDiv.appendChild(taskTitle);
      taskDiv.appendChild(taskDate);
      taskDiv.appendChild(taskDescription);
      taskDiv.appendChild(deleteButton);
      taskDiv.appendChild(editButton);

      tasksContainer.appendChild(taskDiv);
    });
  }
});



console.log('test ts')
