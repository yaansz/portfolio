import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutPage
  }
];
