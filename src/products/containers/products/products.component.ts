import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/products/models/task.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-products',
  template: `
    <app-product-item *ngFor="let task of (tasks$ | async)" [task]="task"></app-product-item>
  `,
  styleUrls: ['products.component.scss']
})
export class ProductsComponent implements OnInit {

  tasks$: Observable<Task[]>;

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.tasks$ = this.store.select(fromStore.getAllTask);
  }

}
