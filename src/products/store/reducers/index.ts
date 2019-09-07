import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTasks from './tasks.reducer';

export interface ProductsState {
  tasks: fromTasks.TaskState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  tasks: fromTasks.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

// tasks state
export const getTaskState = createSelector(
  getProductsState,
  (state: ProductsState) => state.tasks
);

export const getAllTask = createSelector(
  getTaskState,
  fromTasks.getTasks
);

export const getTaskLoading = createSelector(
  getTaskState,
  fromTasks.getTasksLoading
);

export const getTaskLoaded = createSelector(
  getTaskState,
  fromTasks.getTasksLoaded
);
