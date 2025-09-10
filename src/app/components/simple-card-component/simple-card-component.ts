import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SimpleCardContent } from '../../models/simple-card-models';

@Component({
  selector: 'app-simple-card-component',
  imports: [CardModule, ButtonModule],
  templateUrl: './simple-card-component.html',
  styleUrl: './simple-card-component.css'
})
export class SimpleCardComponent {
  @Input() content : SimpleCardContent | null = null;
}
