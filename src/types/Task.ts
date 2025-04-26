// id: A unique identifier for the task
// description: A short description of the task
// status: The status of the task (todo, in-progress, done)
// createdAt: The date and time when the task was created
// updatedAt: The date and time when the task was last updated

export type TaskJson = {
  tasks: Task[]
}

type Task = {
  id: number;
  description: string;
  status: TaskStatus
  createdAt: Date;
  updatedAt?: Date;
}

export type TaskStatus = "todo" | "in-progress" | "done";

export default Task;