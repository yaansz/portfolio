import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-menu-top-component-center',
  imports: [ButtonModule, ToolbarModule, RouterModule],
  templateUrl: './menu-top-component-center.html',
  styleUrl: './menu-top-component-center.css'
})
export class MenuTopComponentCenter {

}
