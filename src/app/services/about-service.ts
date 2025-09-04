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
          'https://media.discordapp.net/attachments/729902870593273879/1413252766448484403/photo-yan.png?ex=68bb41b4&is=68b9f034&hm=1a851c8ba58b3356cd72c4d0139b01b81ea59f54d980d42339ccb2dac1f331ab&=&format=webp&quality=lossless&width=349&height=350',
      },
      {
        title: 'About My Preferences',
        description:
          'I enjoy building robust software using Go and Java. I focus on writing clean, maintainable code and creating efficient architectures for high-availability systems. I also love exploring async programming and scalable back-end solutions.',
        imageUrl: '',
      },
      {
        title: 'Where I’m Based',
        description:
          'I’m located in Rio de Janeiro, RJ, and open to remote or hybrid opportunities.',
        imageUrl:
          'https://media.discordapp.net/attachments/729902870593273879/1413303191373877401/AP1GczO5G8NYkQxQRs1lOQArQvv9_6A1drZAlmf8hmQby3oBq4buQSJmOpTWZZjB-NuIHB3pVCRUMGghosdXQKcEwAlxvPBn_SIw693-h924-s-no-gm.png?ex=68bb70aa&is=68ba1f2a&hm=ae83bad53b7697fc736e762a9ee676cc1ba9c6b6b3166c40cbe17100b28d7fba&=&format=webp&quality=lossless',
      },
    ];
  }
}
