import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarCatalogComponent } from './nav-bar-catalog/nav-bar-catalog.component';
import { PainelCatalogComponent } from './painel-catalog/painel-catalog.component';
import { CardCatalogComponent } from './card-catalog/card-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarCatalogComponent,
    PainelCatalogComponent,
    CardCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
