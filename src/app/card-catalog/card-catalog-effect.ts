import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { CardCatalogService } from './card-catalog.service';
import { getSchoollDisciplines, getSchoolDisciplinesSuccess } from './card-catalog-action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { EMPTY } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'x-transaction-id': '1000',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*'
    })
}

@Injectable()
export class CardCatalogEffect {

    getSchoollDisciplinesEffect$ = createEffect(() => this.actions$.pipe(
        ofType(getSchoollDisciplines),
        mergeMap(() => this.cardCatalogService.getSchoolDisciplines(httpOptions)
            .pipe(
                map((response: any) => getSchoolDisciplinesSuccess(response.data)),
                catchError(() => EMPTY)
            )
        )
    )
    );

    constructor(
        private actions$: Actions,
        private cardCatalogService: CardCatalogService
    ) {
    }
}
