import { DOCUMENT, Inject, Injectable } from '@angular/core';
import { StaticContent } from '../models/static-content';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticContentService {

  constructor(private http : HttpClient) {}

  getStaticContent() : Observable<StaticContent> {
    const path = "about/static.json";
    return this.http.get<StaticContent>(path);
  }

}
