import { Action } from '@ngrx/store';
import { Task } from '../../models/task.model';

// load tasks
export const LOAD_TASKS = '[Products] Load Tasks';
export const LOAD_TASKS_FAIL = '[Products] Load Tasks Fail';
export const LOAD_TASKS_SUCCESS = '[Products] Load Tasks Success';

// add task
export const ADD_TASK_START = '[Products] Add Task Start';
export const ADD_TASK_FAIL = '[Products] Add Task Fail';
export const ADD_TASK_SUCCESS = '[Products] Add Task Success';

// load tasks
export class LoadTasks implements Action {
  readonly type = LOAD_TASKS;
}
export class LoadTasksFail {
  readonly type = LOAD_TASKS_FAIL;
  constructor(public payload: any) {}
}
export class LoadTasksSuccess {
  readonly type = LOAD_TASKS_SUCCESS;
  constructor(public payload: Task[]) {}
}

// add task
export class AddTaskStart implements Action {
  readonly type = ADD_TASK_START;
  constructor(public payload: any) {}
}
export class AddTaskFail {
  readonly type = ADD_TASK_FAIL;
  constructor(public payload: Error) {}
}
export class AddTaskSuccess {
  readonly type = ADD_TASK_SUCCESS;
  constructor(public payload: Task) {}
}

export type TaskAction =
  | LoadTasks
  | LoadTasksFail
  | LoadTasksSuccess
  | AddTaskStart
  | AddTaskFail
  | AddTaskSuccess;
