import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';

export const routes: Routes = [
  {
    path: "",
    component: AboutPage
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];
