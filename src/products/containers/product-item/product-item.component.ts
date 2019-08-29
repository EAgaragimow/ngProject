import { Task } from 'src/products/models/task.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  template: `<p>{{ task.name }}</p>
  <p>{{ task.comment }}</p>
  <p>{{ task.important }}</p>
  <p>{{ task.time }}</p>`,
  styleUrls: ['product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
