import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

// Components
// import * as fromComponents from './components';

// Containers
import * as fromContainers from './containers';

// Services
import * as fromServices from './services';

@NgModule({
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [...fromServices.services],
})
export class ProductsModule {}
