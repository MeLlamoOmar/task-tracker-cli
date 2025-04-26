#!/usr/bin/env node

import process from "node:process";

import { argsOptions } from "./types/Task";
import { addTask, deleteTask, listTasks, updateTask } from "./controller/taskController";
import { createTask } from "./util/util";

import Task from "./types/Task";

const main = async () => {
	const args = process.argv.slice(2);
	const command = args[0];

	switch (command) {
		case argsOptions.ADD:
			console.log("Adding a task...\n");
			const newTask: Task = await createTask(args[1]);
			await addTask(newTask);
			console.log(`Task added suscessuccessfully (ID: ${newTask.id})`);
			break;
		case argsOptions.DELETE:
			const deleteTaskId = Number(args[1])
			await deleteTask(deleteTaskId)
			console.log("Removing a task...\n");
			break;
		case argsOptions.UPDATE:
			console.log("Updating a task...\n");
			const updatedTaskId = Number(args[1])
			const descriptionUpdated = args[2]
			await updateTask(updatedTaskId, descriptionUpdated)
			break;
		case argsOptions.LIST:
			console.log("Listing tasks: \n");
			await listTasks()
			break;
		case argsOptions.MARK:
			console.log("Marking a task...\n");
			break;
		default:
			console.error("Invalid command");
	}
}

main();