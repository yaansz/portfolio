import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service';
import { AboutContent } from '../../models/about-models';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage implements OnInit {

  content : AboutContent | null;

  constructor(private service : AboutService) {
    this.content = null;
  }

  ngOnInit(): void {
    this.content = this.service.getContent();
    console.log("Starting AboutPage", this.content);
  }
}
