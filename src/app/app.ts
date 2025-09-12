import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTopComponent } from './components/menu-top-component/menu-top-component';
import { FooterComponent } from "./components/footer-component/footer-component";
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuTopComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
