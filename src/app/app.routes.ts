import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { ExperiencePage } from './pages/experience-page/experience-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "experience",
    component: ExperiencePage
  },
  {
    path: "about",
    component: AboutPage
  },
  {
    path: "projects",
    component: ProjectsPage
  },
  {
    path: "contact",
    component: ContactPage
  }
];
