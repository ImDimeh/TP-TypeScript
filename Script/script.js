import TaskManager from "./TaskManager";
// Sélection des éléments du formulaire
var taskForm = document.getElementById("taskForm");
var taskTitleInput = document.getElementById("taskTitle");
var taskDescriptionTextarea = document.getElementById("taskDescription");
var taskDueDateInput = document.getElementById("taskDueDate");
var taskPrioritySelect = document.getElementById("taskPriority");
var addButton = document.getElementById("Addtache");
// Création d'une instance de TaskManager
var taskManager = new TaskManager();
// Ajout d'un écouteur d'événement sur la soumission du formulaire
taskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    // Récupération des valeurs des champs de formulaire
    var taskTitle = taskTitleInput.value;
    var taskDescription = taskDescriptionTextarea.value;
    var taskDueDate = taskDueDateInput.value;
    var taskPriority = taskPrioritySelect.value;
    // Création d'une nouvelle tâche
    var newTask = {
        titre: taskTitle,
        description: taskDescription,
        date: Date.now(), // Exemple de date actuelle, à remplacer par la valeur réelle
        priority: taskPriority, // Conversion de string en type priorité
        id: 0, // Remplacer par un vrai ID
        createTask: function () { }, // Méthode bidon, à remplacer si nécessaire
        deleteTask: function () { }, // Méthode bidon, à remplacer si nécessaire
        filtersTask: function () { } // Méthode bidon, à remplacer si nécessaire
    };
    // Ajout de la tâche à la liste des tâches dans TaskManager
    taskManager.createTask(newTask);
    // Réinitialisation du formulaire
    taskForm.reset();
});
console.log('test ts');
