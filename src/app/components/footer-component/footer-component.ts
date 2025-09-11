import { Component, Input, OnInit } from '@angular/core';
import { FooterContent } from '../../models/footer-content';
import { FooterService } from '../../services/footer-service';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent implements OnInit {

  @Input() footerContent : FooterContent | null  = null;

  constructor(private service : FooterService) {}
  ngOnInit(): void {
    this.footerContent = this.service.getFooterContent();
  }

  getCurrentYear() : number {
    return new Date().getFullYear();
  }
}
