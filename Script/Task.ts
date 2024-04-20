interface Task {
  titre: string;
  date: number;
  description: string;
  priority: "haute" | "faible" | "moyenne";
  createTask: () => void;
  deleteTask: () => void;
  filtersTask: () => void;
}

export default Task;