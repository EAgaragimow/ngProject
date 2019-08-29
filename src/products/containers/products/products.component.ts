import { TasksService } from './../../services/tasks.service';
import { Task } from 'src/products/models/task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <app-product-item *ngFor="let task of tasks" [task]="task"></app-product-item>
  `,
  styleUrls: ['products.component.scss']
})
export class ProductsComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe((res: Task[]) => {
      this.tasks = res;
    });
  }

}
