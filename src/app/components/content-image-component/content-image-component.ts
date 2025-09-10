import { Component, Input } from '@angular/core';
import { ContentWithImage } from '../../models/content-image-models';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-content-image-component',
  imports: [],
  templateUrl: './content-image-component.html',
  styleUrl: './content-image-component.css'
})
export class ContentImageComponent {
  @Input() content : ContentWithImage | null = null;
}
