import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { MenuModule } from 'primeng/menu';
import { PopoverModule } from 'primeng/popover';
import { MenuTopComponentLeft } from './menu-top-component-left/menu-top-component-left';
import { MenuTopComponentCenter } from './menu-top-component-center/menu-top-component-center';
import { MenuTopComponentRight } from './menu-top-component-right/menu-top-component-right';




@Component({
  selector: 'app-menu-top-component',
  imports: [
    MenuTopComponentLeft,
    MenuTopComponentCenter,
    MenuTopComponentRight],
  templateUrl: './menu-top-component.html',
  styleUrl: './menu-top-component.css',
})
export class MenuTopComponent {
}
