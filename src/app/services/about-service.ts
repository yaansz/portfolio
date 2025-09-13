import { Injectable } from '@angular/core';
import { ContentWithImage } from '../models/content-image-models';
import { SimpleCardContent } from '../models/simple-card-models';
import { AdvancedCardContent } from '../models/advanced-card-content';
import { ProjectsContent } from '../models/projects-models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AboutFile {
  about: ContentWithImage[];
  stack: SimpleCardContent[];
  aboutMe: AdvancedCardContent[];
  projects: ProjectsContent[];
}

@Injectable({
  providedIn: 'root',
})
export class AboutService {

  constructor(private http : HttpClient) {}

  loadContent(lang: string): Observable<AboutFile> {
    const path = `about/${lang}.json`;
    return this.http.get<AboutFile>(path);
  }
}
