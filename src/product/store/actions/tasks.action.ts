import { Action } from '@ngrx/store';
import { Task } from '../../models/task.model';

// load tasks
export const LOAD_TASKS = '[Products] Load Tasks';
export const LOAD_TASKS_FAIL = '[Products] Load Tasks Fail';
export const LOAD_TASKS_SUCCESS = '[Products] Load Tasks Success';

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

export type TaskAction =
  | LoadTasks
  | LoadTasksFail
  | LoadTasksSuccess;
