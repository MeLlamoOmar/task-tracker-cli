import { TaskStatus } from "../types/Task";

export const createCheckbox = (status: TaskStatus): string | undefined => {
  switch (status) {
    case 'done':
      return '[X]'
    case "todo":
      return '[ ]'
    case "in-progress":
      return '[~]'
    default:
      break;
  }
}