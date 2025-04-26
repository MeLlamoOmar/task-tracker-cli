import { readFile } from "node:fs/promises";

import Task, { TaskJson, TaskStatus } from "../types/Task";

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

export const getTasksList = async (): Promise<TaskJson> => {
  let jsonData: TaskJson
  const rawData = await readFile('output.json', {encoding: 'utf-8'});
  if (rawData.length === 0) {
    jsonData = {
      tasks: []
    }
  } else {
    jsonData = JSON.parse(rawData).tasks;
  }

  return jsonData;
}