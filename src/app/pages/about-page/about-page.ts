import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service';
import { ContentWithImage } from '../../models/content-image-models';
import { ContentImageComponent } from "../../components/content-image-component/content-image-component";

@Component({
  selector: 'app-about-page',
  imports: [ContentImageComponent],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage implements OnInit {

  contentList : ContentWithImage[] = [];

  constructor(private service : AboutService) {
    this.contentList = [];
  }

  ngOnInit(): void {
    this.contentList = this.service.getContent();
    console.log("Starting AboutPage", this.contentList);
  }
}
