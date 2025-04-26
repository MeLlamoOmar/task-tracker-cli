import fs from 'fs/promises';
import Task from '../types/Task';
import { createCheckbox, getTasksList } from '../util/util';

export const addTask = async (newTodo: Task) => {
  let taskList = await getTasksList();
  taskList.tasks = [...taskList.tasks, newTodo]

  await fs.writeFile('output.json', JSON.stringify(taskList), {encoding: 'utf-8'});
}

export const listTasks = async () => {
  const taskList = await getTasksList()

  taskList.tasks.forEach((task: Task, index: number) => {
    const checkBox = createCheckbox(task.status);
    console.log(`${index + 1}) ${checkBox ? checkBox : 'error'} ${task.description}`)
  });
}

export const deleteTask = async (deleteId: number) => {
  const taskList = await getTasksList()

  const filteredTaskList = taskList.tasks.filter(task => task.id !== deleteId)
  taskList.tasks = filteredTaskList

  await fs.writeFile('output.json', JSON.stringify(taskList), {encoding: 'utf-8'});
}

export const updateTask = async (updateId: number, updateDescription: string) => {
  const taskList = await getTasksList()
  const filteredTaskList = taskList.tasks.filter(task => task.id === updateId)
  
  filteredTaskList[0].description = updateDescription
  taskList.tasks.splice(updateId - 1, 1, filteredTaskList[0])
  
  await fs.writeFile('output.json', JSON.stringify(taskList), {encoding: 'utf-8'});
}