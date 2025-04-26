import { randomUUID } from 'node:crypto';
import fs from 'fs/promises';
import Task, { TaskJson } from '../types/Task';
import { createCheckbox, getTasksList } from '../util/util';

export const addTask = async (newTodo: Task) => {
  let taskList: TaskJson = await getTasksList();
  taskList.tasks = [...taskList.tasks, newTodo]

  await fs.writeFile('output.json', JSON.stringify(taskList), {encoding: 'utf-8'});
}

export const listTasks = async () => {
  const taskList: TaskJson = await getTasksList()

  taskList.tasks.forEach((task: Task, index: number) => {
    const checkBox = createCheckbox(task.status);
    console.log(`${index + 1}) ${checkBox ? checkBox : 'error'} ${task.description}`)
  });
}