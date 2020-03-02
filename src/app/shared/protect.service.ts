import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(protected http: HttpClient) { }

    getAll<T>(url): Observable<T> {
        return this.http.get<T>(url)
            .pipe(
                catchError(this.handleError)
            );

    }

    getAllParams<T>(url, params): Observable<T> {
        return this.http.get<T>(url, { params });

    }

    getAllHeaders<T>(url, headers) {
        return this.http.get<T>(url, headers);

    }

    postAll(url, params, httpOptions) {
        /*//pass it like this if you can change web api*/
        return this.http.post(url, params);
    }
    private handleError(error: Response | any) {
        switch (error.status) {
            case 500:
                return Observable.throw('Erro interno no servidor!');
            case 200:
                return Observable.throw(error.error.error + ' ' + 'Text: ' + error.error.text);
        }
    }
    private parserTexto() {

    }
}
