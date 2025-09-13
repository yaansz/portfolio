import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service';
import { ContentWithImage } from '../../models/content-image-models';
import { ContentImageComponent } from "../../components/content-image-component/content-image-component";
import { SimpleCardComponent } from '../../components/simple-card-component/simple-card-component';
import { SimpleCardContent } from '../../models/simple-card-models';
import { DividerModule } from 'primeng/divider';
import { AdvancedCardComponent } from "../../components/advanced-card-component/advanced-card-component";
import { AdvancedCardContent } from '../../models/advanced-card-content';
import { ProjectInfoComponent } from '../../components/project-info-component/project-info-component';
import { ProjectsContent } from '../../models/projects-models';
import { LangChangeEvent, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [ContentImageComponent, SimpleCardComponent, DividerModule, AdvancedCardComponent, ProjectInfoComponent, TranslatePipe],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage implements OnInit {

  currentLang : string = '';
  contentList : ContentWithImage[] = [];
  stackContent : SimpleCardContent[] = [];
  aboutMeContent : AdvancedCardContent[] = [];
  personalProjects : ProjectsContent[] = [];

  constructor(
    private service : AboutService,
    private translate : TranslateService,
    private meta : Meta,
    private title : Title
  ) {

    this.title.setTitle('Yan Figueiredo | Portfolio');
    this.meta.updateTag({ name: 'description', content: 'Portfolio of Yan Figueiredo, software developer.' });

    this.contentList = [];
    this.stackContent = [];
    this.aboutMeContent = [];
    this.personalProjects = [];
  }

  ngOnInit(): void {
    this.currentLang = this.translate.getCurrentLang();

    this.translate.onLangChange.subscribe(
      (event : LangChangeEvent) => {
        console.log('Language changed to: ', event.lang);
        this.currentLang = event.lang;
        this.fetchContent();
      }
    );

    this.fetchContent();
  }

  private fetchContent() : void {
    console.log('Fetching Page content in', this.currentLang);

    this.service.loadContent(this.currentLang).subscribe(file => {
      this.contentList = file.about;
      this.stackContent = file.stack;
      this.aboutMeContent = file.aboutMe;
      this.personalProjects = file.projects;
    });
  }
}
