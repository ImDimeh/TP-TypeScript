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
window.addEventListener("load", function () {
    console.log("task chargé");
    var tasks = taskManager.getAllTasks();
    var tasksContainer = document.getElementById("tasks");
    if (tasksContainer) {
        tasks.forEach(function (task) {
            var taskDiv = document.createElement("div");
            if (task.priority === "haute") {
                taskDiv.classList.add("task", 'task high');
            }
            else if (task.priority === "moyenne") {
                taskDiv.classList.add("task", "task medium");
            }
            else if (task.priority === "faible") {
                taskDiv.classList.add("task", "task low");
            }
            var taskTitle = document.createElement("h3");
            taskTitle.textContent = "".concat(task.titre, " <span>\u2013 Priorit\u00E9 ").concat(task.priority.charAt(0).toUpperCase() + task.priority.slice(1), "</span>");
            var taskDate = document.createElement("p");
            taskDate.textContent = "Date d'\u00E9ch\u00E9ance: ".concat(task.date);
            var taskDescription = document.createElement("p");
            taskDescription.textContent = task.description;
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            deleteButton.addEventListener("click", function () {
                taskManager.deleteTask(task.id);
                tasksContainer.removeChild(taskDiv);
            });
            var editButton = document.createElement("button");
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
console.log('test ts');
