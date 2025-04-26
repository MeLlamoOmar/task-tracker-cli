import fs from 'fs/promises';
import Task, { MarkOptions, TaskJson } from '../types/Task';
import { createCheckbox, getTasksList } from '../util/util';

export const addTask = async (newTodo: Task) => {
  let taskList = await getTasksList();
  taskList.tasks = [...taskList.tasks, newTodo]

  await fs.writeFile('output.json', JSON.stringify(taskList), {encoding: 'utf-8'});
}

export const listTasks = async (flagFilter = 'all') => {
  const taskList = await getTasksList()
  const filteredTaskList = flagFilter === 'all' 
  ? taskList.tasks 
  : taskList.tasks.filter(task => task.status === flagFilter);

  filteredTaskList.forEach((task: Task, index: number) => {
    const checkBox = createCheckbox(task.status);
    console.log(`${index + 1}) ${checkBox ? checkBox : 'error'} ${task.description}`);
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
  filteredTaskList[0].updatedAt = new Date(Date.now())
  taskList.tasks.toSpliced(updateId - 1, 1, filteredTaskList[0])
  
  await fs.writeFile('output.json', JSON.stringify(taskList), {encoding: 'utf-8'});
}

export const markedOptions = async (markOption: MarkOptions, markId: number) => {
  const taskList = await getTasksList()
  const filteredTaskList = taskList.tasks.filter(task => task.id === markId)
  
  switch (markOption) {
    case MarkOptions.DONE:
      filteredTaskList[0].status = 'done'
      filteredTaskList[0].updatedAt = new Date(Date.now())
      taskList.tasks.toSpliced(markId - 1, 1, filteredTaskList[0])
      break;
    case MarkOptions.TODO:
      filteredTaskList[0].status = 'todo'
      filteredTaskList[0].updatedAt = new Date(Date.now())
      taskList.tasks.toSpliced(markId - 1, 1, filteredTaskList[0])
      break;
    case MarkOptions.INPROGRESS:
      filteredTaskList[0].status = 'in-progress'
      filteredTaskList[0].updatedAt = new Date(Date.now())
      taskList.tasks.toSpliced(markId - 1, 1, filteredTaskList[0])
      break;
    default:
      break;
  }
  
  await fs.writeFile('output.json', JSON.stringify(taskList), {encoding: 'utf-8'});
}