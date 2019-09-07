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
}
