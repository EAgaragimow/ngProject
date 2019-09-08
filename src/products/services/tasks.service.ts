import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TasksService {
    constructor(private http: HttpClient) {}

    getTasks(): Observable<Task[]> {
        return this.http
            .get<Task[]>('http://localhost:3000/tasks')
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    // addProduct(product: Product): Observable<Product> {
    //   return this.http.post<Product>(`${environment.api_url}/products`, product);
    // }
}
