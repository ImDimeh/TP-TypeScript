interface Task {
  titre: string;
  date: number;
  description: string;
  priority: "haute" | "faible" | "moyenne";
  id :number
  createTask: () => void;
  deleteTask: () => void;
  filtersTask: () => void;
}

export default Task;