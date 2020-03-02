import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlConstants } from '../shared/url-constants'
import { ProjectService } from '../shared/protect.service'



@Injectable({
  providedIn: 'root'
})
export class CardCatalogService extends ProjectService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getSchoolDisciplines(headers) {
    return super.getAllHeaders(UrlConstants.GET_SCHOOL_DISCIPLINES, headers);
  }



}
