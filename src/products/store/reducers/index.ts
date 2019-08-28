import { ActionReducerMap } from '@ngrx/store';

import * as fromTasks from './tasks.reducer';

export interface ProductsState {
  tasks: fromTasks.TaskState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  tasks: fromTasks.reducer
};
