import { createReducer, on, createSelector, createFeatureSelector } from "@ngrx/store"
import { getSchoollDisciplines, getSchoolDisciplinesSuccess } from './card-catalog-action';


export interface CardCatalogState {
    disciplinesCatalog: any[],
    loading: boolean
}

export const initialState: CardCatalogState = {
    disciplinesCatalog: [],
    loading: false
};

const _cardCatalogReducer = createReducer(initialState,
    on(getSchoollDisciplines, state => Object.assign({}, state, { loading: true })),
    on(getSchoolDisciplinesSuccess, (state, action) => Object.assign({}, state, { loading: false, disciplinesCatalog: action.disciplines })),

);

export function cardCatalogReducer(state, action) {
    return _cardCatalogReducer(state, action);
}

export const selectFeature = createFeatureSelector<any>('CardCatalog');

export const selectDisciplinesCatalog = createSelector(
    selectFeature,
    (state: any) => state.cardCatalogReducer.disciplinesCatalog
);

