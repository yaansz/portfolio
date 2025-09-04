import { Injectable } from '@angular/core';
import { AboutContent } from '../models/about-models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  getContent() : AboutContent {
    return {
      title: "Hello, I'm Yan",
      description: "Welcome! I'm a software developer and graduate of the Federal Rural University of Rio de Janeiro. I specialize in building back-end and full-stack applications, with a focus on creating reliable and scalable solutions.",
      imageUrl: "https://media.discordapp.net/attachments/729902870593273879/1413252766448484403/photo-yan.png?ex=68bb41b4&is=68b9f034&hm=1a851c8ba58b3356cd72c4d0139b01b81ea59f54d980d42339ccb2dac1f331ab&=&format=webp&quality=lossless&width=349&height=350"
    }
  }
}
