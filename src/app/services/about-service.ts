import { Injectable } from '@angular/core';
import { ContentWithImage } from '../models/content-image-models';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  getContent(): ContentWithImage[] {
    return [
      {
        title: "Hello, I'm Yan",
        description:
          "Welcome! I'm a software developer and graduate of the Federal Rural University of Rio de Janeiro. I specialize in building back-end and full-stack applications, with a focus on creating reliable and scalable solutions.",
        imageUrl:
          'images/photo-yan.png',
      },
      {
        title: 'About My Preferences',
        description:
          'I enjoy building robust software using Go and Java. I focus on writing clean, maintainable code and creating efficient architectures for high-availability systems. I also love exploring async programming and scalable back-end solutions.',
        imageUrl: '',
      }
    ];
  }
}
