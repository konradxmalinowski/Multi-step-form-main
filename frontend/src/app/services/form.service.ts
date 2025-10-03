import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, ResponseForm } from '../types/form';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  constructor(private httpClient: HttpClient) { }
  private URL: string = environment.apiURL;

  insertForm(form: Form): Observable<ResponseForm> {
    return this.httpClient.post<ResponseForm>(this.URL, form);
  }

  getServices(): Observable<ResponseForm[]> {
    return this.httpClient.get<ResponseForm[]>(this.URL);
  }
}
