import { createAction } from '@ngrx/store';

export const getSchoollDisciplines = createAction('[CardCatalog] getSchoolDisciplines');
export const getSchoolDisciplinesSuccess = createAction('[CardCatalog] getSchoolDisciplinesSuccess', (disciplines: any[]) => ({ disciplines }));