import { Injectable } from '@angular/core';
import { FooterContent } from '../models/footer-content';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  getFooterContent() : FooterContent {
    return {
      twitter: "https://x.com/yaaaansz",
      github: "https://github.com/yaansz",
      linkedin: "https://www.linkedin.com/in/yansz/",
      youtube: "https://www.youtube.com/@Yeioucraft",
      email: "yancfm@gmail.com"
    }
  }

}
