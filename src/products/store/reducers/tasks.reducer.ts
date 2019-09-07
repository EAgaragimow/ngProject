import * as fromTasks from '../actions/tasks.action';
import { Task } from 'src/products/models/task.model';

export interface TaskState {
  data: Task[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: TaskState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromTasks.TaskAction
): TaskState {

  switch (action.type) {
    case fromTasks.LOAD_TASKS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromTasks.LOAD_TASKS_SUCCESS: {
      console.log(action.payload);

      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromTasks.LOAD_TASKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getTasks = (state: TaskState) => state.data;
export const getTasksLoading = (state: TaskState) => state.loading;
export const getTasksLoaded = (state: TaskState) => state.loaded;
