import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

// Components
// import * as fromComponents from './components';

// Containers
// import * as fromContainers from './containers';

// Services
// import * as fromServices from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', {}),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class ProductModule {}
