import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// store entities import
import { reducers, effects } from './store';

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
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('products', reducers),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [...fromServices.services],
})
export class ProductsModule {}
