import { Injectable } from '@angular/core';
import { ContentWithImage } from '../models/content-image-models';
import { SimpleCardContent } from '../models/simple-card-models';
import { AdvancedCardContent } from '../models/advanced-card-content';

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
        imageUrl: 'images/photo-yan.png',
      },
      {
        title: 'About My Preferences',
        description:
          'I enjoy building robust software using Go and Java. I focus on writing clean, maintainable code and creating efficient architectures for high-availability systems. I also love exploring async programming and scalable back-end solutions.',
        imageUrl: '',
      },
    ];
  }

  getAboutMe(): AdvancedCardContent[] {
    return [
      {
        title: 'Education',
        subtitle: 'Graduate of the Federal Rural University of Rio de Janeiro in 2023',
        description:
          'Bachelor of Computer Science (B.Sc.) from UFRRJ, with specializations in Systems and Information Engineering and Intelligent Systems, graduated cum laude.',
        icon: 'pi pi-graduation-cap',
      },
      {
        title: 'Experience',
        subtitle: 'Professional Software Developer Experience since 2021',
        description: `
Build and maintain high-performance systems, with experience in TCP, WebSockets, REST, threading, and software metrics.
Contributed to teaching and research in data structures and data analysis/generation packages.
  `,
        icon: 'pi pi-star-fill',
      },
    ];
  }

  getTechStack(): SimpleCardContent[] {
    return [
      {
        title: 'Delphi',
        description:
          'Mainly developed Windows Services for enterprise systems, using ICS and Horse for web services.',
      },
      {
        title: 'Java',
        description:
          'Built enterprise applications and experimented with personal projects using Spring Framework.',
      },
      {
        title: 'TypeScript',
        description:
          'Developed frontend applications with Angular, focusing on scalable and dynamic interfaces.',
      },
      {
        title: 'Go',
        description: 'Created high-performance APIs and personal projects with Fiber.',
      },
      {
        title: 'Git / GitHub / GitLab',
        description: `
Daily use of version control, managing codebases, collaborating on projects,
and implementing CI/CD pipelines for automated testing and deployment.
  `,
      },
      {
        title: 'Docker',
        description: 'Containerized applications for consistent environments and deployment.',
      },
    ];
  }
}
