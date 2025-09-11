import { Component, Input } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-player-component',
  imports: [YouTubePlayerModule],
  templateUrl: './youtube-player-component.html',
  styleUrl: './youtube-player-component.css'
})
export class YoutubePlayerComponent {

  @Input() videoId : string = '';
}
