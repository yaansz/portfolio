import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { ExperiencePage } from './pages/experience-page/experience-page';

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
  }
];
