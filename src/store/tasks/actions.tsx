import { Task, ADD_TASK, DELETE_TASK } from "./types";

export function addTask(newTask: Task) {
    return {
        type: ADD_TASK,
        payload: newTask,
    };
}

export function deleteTask(task: Task) {
    return {
        type: DELETE_TASK,
        payload: task,
    };
}
