import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-menu-top-component-center',
  imports: [ButtonModule, ToolbarModule, RouterModule, TranslatePipe],
  templateUrl: './menu-top-component-center.html',
  styleUrl: './menu-top-component-center.css'
})
export class MenuTopComponentCenter {

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
