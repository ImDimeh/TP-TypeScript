// Sélection des éléments du formulaire
var taskForm = document.getElementById("taskForm");
var taskTitleInput = document.getElementById("taskTitle");
var taskDescriptionTextarea = document.getElementById("taskDescription");
var taskDueDateInput = document.getElementById("taskDueDate");
var taskPrioritySelect = document.getElementById("taskPriority");
var addButton = document.getElementById("Addtache");
// Ajout d'un écouteur d'événement sur la soumission du formulaire
taskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    // Récupération des valeurs des champs de formulaire
    var taskTitle = taskTitleInput.value;
    var taskDescription = taskDescriptionTextarea.value;
    var taskDueDate = taskDueDateInput.value;
    var taskPriority = taskPrioritySelect.value;
    // Affichage des valeurs dans la console
    console.log("Titre de la tâche :", taskTitle);
    console.log("Description de la tâche :", taskDescription);
    console.log("Date d'échéance de la tâche :", taskDueDate);
    console.log("Priorité de la tâche :", taskPriority);
    // Création d'une nouvelle tâche
    var task = new Task(taskTitle, taskDescription, taskDueDate, taskPriority);
    // Ajout de la tâche à la liste des tâches
    task.addTask(task);
    // Réinitialisation du formulaire
    taskForm.reset();
});
console.log('test ts');
export {};
