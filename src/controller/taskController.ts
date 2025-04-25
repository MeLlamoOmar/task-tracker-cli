import { randomUUID } from 'node:crypto';
import fs from 'fs/promises';
import Task from '../types/Task';

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
  const rawData = await fs.readFile('output.json', {encoding: 'utf-8'});
  const jsonData = JSON.parse(rawData);
  
  jsonData.tasks = [...jsonData.tasks, newTodo];
  await fs.writeFile('output.json', jsonData, {encoding: 'utf-8'});
}