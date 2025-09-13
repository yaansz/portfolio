import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../../../services/static-content-service';

@Component({
  selector: 'app-menu-top-component-left',
  imports: [],
  templateUrl: './menu-top-component-left.html',
  styleUrl: './menu-top-component-left.css'
})
export class MenuTopComponentLeft implements OnInit {

  name : string = '';

  constructor(private staticContent : StaticContentService) {}
  ngOnInit(): void {
    this.staticContent.getStaticContent().subscribe(content => {
      this.name = content.name;
    })
  }

}
