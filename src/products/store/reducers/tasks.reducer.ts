import * as fromTasks from '../actions/tasks.action';
import { Task } from 'src/products/models/task.model';

export interface TaskState {
  entities: {[id: number]: Task};
  loaded: boolean;
  loading: boolean;
  error: Error;
}

export const initialState: TaskState = {
  entities: {},
  loaded: false,
  loading: false,
  error: null
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
      const tasks = action['payload'];

      const entities = tasks.reduce(
        (entities: {[id: number]: Task}, task: Task) => {
          return {
            ...entities,
            [task.id]: task
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromTasks.LOAD_TASKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromTasks.ADD_TASK_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromTasks.ADD_TASK_SUCCESS: {

      return {
        ...state,
        // products: [...state.products, action['payload']],
        loading: false,
        loaded: true,
      };
    }

    case fromTasks.ADD_TASK_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action['payload'],
      };
    }
  }

  return state;
}

export const getTasksEntities = (state: TaskState) => state.entities;
export const getTasksLoading = (state: TaskState) => state.loading;
export const getTasksLoaded = (state: TaskState) => state.loaded;
