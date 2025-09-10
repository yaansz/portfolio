import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service';
import { ContentWithImage } from '../../models/content-image-models';
import { ContentImageComponent } from "../../components/content-image-component/content-image-component";
import { SimpleCardComponent } from '../../components/simple-card-component/simple-card-component';
import { SimpleCardContent } from '../../models/simple-card-models';
import { DividerModule } from 'primeng/divider';
import { AdvancedCardComponent } from "../../components/advanced-card-component/advanced-card-component";
import { AdvancedCardContent } from '../../models/advanced-card-content';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-about-page',
  imports: [ContentImageComponent, SimpleCardComponent, DividerModule, AdvancedCardComponent],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage implements OnInit {

  contentList : ContentWithImage[] = [];
  stackContent : SimpleCardContent[] = [];
  aboutMeContent : AdvancedCardContent[] = [];

  constructor(private service : AboutService) {
    this.contentList = [];
    this.stackContent = [];
    this.aboutMeContent = [];
  }

  ngOnInit(): void {
    this.contentList = this.service.getContent();
    this.stackContent = this.service.getTechStack();
    this.aboutMeContent = this.service.getAboutMe();
  }
}
