import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProjectsContent } from '../../models/projects-models';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { YoutubePlayerComponent } from "../youtube-player-component/youtube-player-component";
import { TranslatePipe } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Platform } from '@angular/cdk/platform';


@Component({
  selector: 'app-project-info-component',
  imports: [CardModule, ButtonModule, RouterModule, TagModule, DialogModule, YoutubePlayerComponent, TranslatePipe],
  templateUrl: './project-info-component.html',
  styleUrl: './project-info-component.css'
})
export class ProjectInfoComponent {

  youtubeDialog : boolean = false;

  constructor(private deviceService : DeviceDetectorService) {}

  @Input() project : ProjectsContent | null = null;

  openVideo() {
    console.log(this.deviceService.getDeviceInfo);

    if(this.isMobile() && this.project?.youtube) {
      window.open(`https://www.youtube.com/watch?v=${this.project?.youtube}`, '_blank');
    } else if(this.project?.youtube) {
      this.youtubeDialog = true;
    }
  }

  private isMobile(): boolean {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // Or use Angular CDK Platform: return this.platform.ANDROID || this.platform.IOS;
  }
}
