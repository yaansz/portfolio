import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProjectsContent } from '../../models/projects-models';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-info-component',
  imports: [CardModule, ButtonModule, RouterModule],
  templateUrl: './project-info-component.html',
  styleUrl: './project-info-component.css'
})
export class ProjectInfoComponent {

  @Input() project : ProjectsContent | null = null;
}
