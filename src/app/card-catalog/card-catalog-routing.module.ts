import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCatalogComponent } from './card-catalog.component';


const routes: Routes = [
  { path: '', component: CardCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardCatalogRoutingModule { }
