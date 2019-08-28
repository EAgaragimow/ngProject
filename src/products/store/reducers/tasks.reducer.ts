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

