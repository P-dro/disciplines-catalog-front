import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardCatalogState, selectDisciplinesCatalog } from './card-catalog-reducer';
import { getSchoollDisciplines } from './card-catalog-action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrls: ['./card-catalog.component.css']
})
export class CardCatalogComponent implements OnInit {

  disciplines$: Observable<any[]>;

  constructor(private store: Store<CardCatalogState>) { }

  ngOnInit() {
    this.store.dispatch(getSchoollDisciplines());
    this.disciplines$ = this.store.select(selectDisciplinesCatalog);
  }

}
