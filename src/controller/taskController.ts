import { randomUUID } from 'node:crypto';
import fs from 'fs/promises';
import Task from '../types/Task';
import { createCheckbox } from '../util/util';

export const createTask = (taskName: string): Task => {
  const newTask: Task = {
    id: randomUUID(),
    description: taskName,
    status: 'todo',
    createdAt: new Date(Date.now())
  };

  return newTask;
}

export const addTask = async (newTodo: Task) => {
  let jsonData
  const rawData = await fs.readFile('output.json', {encoding: 'utf-8'});
  if (rawData.length === 0) {
    jsonData = {
      tasks: [newTodo]
    }
  } else {
    jsonData = JSON.parse(rawData);
    jsonData.tasks = [...jsonData.tasks, newTodo];
  }

  await fs.writeFile('output.json', JSON.stringify(jsonData), {encoding: 'utf-8'});
}

export const listTasks = async () => {
  let jsonData
  const rawData = await fs.readFile('output.json', {encoding: 'utf-8'});
  if (rawData.length === 0) {
    jsonData = {
      tasks: []
    }
  } else {
    jsonData = JSON.parse(rawData);
  }

  jsonData.task.forEach((task: Task, index: number) => {
    const checkBox = createCheckbox(task.status);
    console.log(`${index + 1}) ${checkBox ? checkBox : 'error'} ${task.description}`)
  });
}