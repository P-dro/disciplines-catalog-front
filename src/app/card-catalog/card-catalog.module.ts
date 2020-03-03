import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardCatalogRoutingModule } from './card-catalog-routing.module';
import { CardCatalogComponent } from './card-catalog.component';
import { StoreModule } from '@ngrx/store';
import { cardCatalogReducer } from './card-catalog-reducer';
import { CardCatalogService } from './card-catalog.service';
import { EffectsModule } from '@ngrx/effects';
import { CardCatalogEffect } from './card-catalog-effect';


@NgModule({
  declarations: [CardCatalogComponent],
  imports: [
    CommonModule,
    CardCatalogRoutingModule,
    StoreModule.forFeature('CardCatalog',
      { cardCatalogReducer: cardCatalogReducer }),
    EffectsModule.forFeature([CardCatalogEffect])
  ],
  providers: [
    CardCatalogService
  ]
})
export class CardCatalogModule { }
