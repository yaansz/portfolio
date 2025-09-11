import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProjectsContent } from '../../models/projects-models';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { YoutubePlayerComponent } from "../youtube-player-component/youtube-player-component";


@Component({
  selector: 'app-project-info-component',
  imports: [CardModule, ButtonModule, RouterModule, TagModule, DialogModule, YoutubePlayerComponent],
  templateUrl: './project-info-component.html',
  styleUrl: './project-info-component.css'
})
export class ProjectInfoComponent {

  youtubeDialog : boolean = false;

  @Input() project : ProjectsContent | null = null;

  openDialog() {
    this.youtubeDialog = true;

  }
}
