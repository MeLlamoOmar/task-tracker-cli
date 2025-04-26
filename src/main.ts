#!/usr/bin/env node

import process from "node:process";

import Task, { ArgsOptions, MarkOptions } from "./types/Task.js";
import { addTask, deleteTask, listTasks, markedOptions, updateTask } from "./controller/taskController.js";
import { createTask } from "./util/util.js";

const main = async () => {
	const args = process.argv.slice(2);
	const command = args[0];

	switch (command) {
		case ArgsOptions.ADD:
			console.log("Adding a task...\n");
			const newTask: Task = await createTask(args[1]);
			await addTask(newTask);
			console.log(`Task added suscessuccessfully (ID: ${newTask.id})`);
			break;
		case ArgsOptions.DELETE:
			const deleteTaskId = Number(args[1])
			await deleteTask(deleteTaskId)
			console.log("Removing a task...\n");
			break;
		case ArgsOptions.UPDATE:
			console.log("Updating a task...\n");
			const updatedTaskId = Number(args[1])
			const descriptionUpdated = args[2]
			await updateTask(updatedTaskId, descriptionUpdated)
			break;
		case ArgsOptions.LIST:
			console.log("Listing tasks: \n");
			const filterFlag = args[1]
			if (!filterFlag) {
				await listTasks()
			} else {
				await listTasks(filterFlag)
			}
			break;
		case ArgsOptions.MARK:
			console.log("Marking a task...\n");
			const markOption = args[1]
			const markId = Number(args[2])
			await markedOptions(markOption as MarkOptions, markId)
			break;
		default:
			console.error("Invalid command");
	}
}

main();