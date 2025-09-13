import { Component, Input, OnInit } from '@angular/core';
import { StaticContent } from '../../models/static-content';
import { StaticContentService } from '../../services/static-content-service';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent implements OnInit {

  @Input() footerContent : StaticContent | null  = null;

  constructor(private service : StaticContentService) {}
  ngOnInit(): void {
    this.footerContent = this.service.getStaticContent();
  }

  getCurrentYear() : number {
    return new Date().getFullYear();
  }
}
