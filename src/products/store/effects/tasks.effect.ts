import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as tasksActions from '../actions/tasks.action';
import * as fromServices from '../../services';

@Injectable()
export class TasksEffects {
    constructor(
        private actions$: Actions,
        private service: fromServices.TasksService) {}

    @Effect()
    loadTasks$ = this.actions$.pipe(
        ofType(tasksActions.LOAD_TASKS),
        switchMap(() => {
            return this.service
                .getTasks()
                .pipe(
                    map(tasks => new tasksActions.LoadTasksSuccess(tasks)),
                    catchError((error: any) => of(new tasksActions.LoadTasksFail(error)))
                );
        })
    );

    // @Effect()
    // addProduct$: Observable<Action> = this.actions$.pipe(
    //   ofType(productsActions.ADD_PRODUCT_START),
    //   switchMap((action: productsActions.AddProductStart) => {
    //     return this.productsService
    //       .addProduct(action.payload)
    //       .pipe(
    //         pluck('product'),
    //         map((res: Product) => new productsActions.AddProductSuccess(res)),
    //         catchError((error: Error) => of(new productsActions.AddProductFail(error)))
    //       );
    //   })
    // );
}
