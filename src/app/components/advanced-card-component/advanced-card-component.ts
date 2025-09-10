import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AdvancedCardContent } from '../../models/advanced-card-content';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-advanced-card-component',
  imports: [CardModule, AvatarModule],
  templateUrl: './advanced-card-component.html',
  styleUrl: './advanced-card-component.css'
})
export class AdvancedCardComponent {
  @Input() content : AdvancedCardContent | null = null;
}
