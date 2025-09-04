import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTopComponent } from './components/menu-top-component/menu-top-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
