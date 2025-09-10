import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service';
import { ContentWithImage } from '../../models/content-image-models';
import { ContentImageComponent } from "../../components/content-image-component/content-image-component";
import { SimpleCardComponent } from '../../components/simple-card-component/simple-card-component';
import { SimpleCardContent } from '../../models/simple-card-models';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about-page',
  imports: [ContentImageComponent, SimpleCardComponent, DividerModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage implements OnInit {

  contentList : ContentWithImage[] = [];
  stackContent : SimpleCardContent[] = [];

  constructor(private service : AboutService) {
    this.contentList = [];
    this.stackContent = [];
  }

  ngOnInit(): void {
    this.contentList = this.service.getContent();
    console.log("Starting AboutPage : Content", this.contentList);

    this.stackContent = this.service.getTechStack();
    console.log("Starting AboutPage : Content", this.stackContent);
  }
}
