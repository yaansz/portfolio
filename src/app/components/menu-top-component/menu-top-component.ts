import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { MenuModule } from 'primeng/menu';
import { PopoverModule } from 'primeng/popover';

type LangOption = { label: string; value: string; emoji?: string; title?: string };


@Component({
  selector: 'app-menu-top-component',
  imports: [ToolbarModule, ButtonModule, SelectButtonModule, FormsModule, IconFieldModule, ButtonModule, PopoverModule],
  templateUrl: './menu-top-component.html',
  styleUrl: './menu-top-component.css',
})
export class MenuTopComponent {

  langOptions: LangOption[] = [
    { label: 'English', value: 'en'},
    { label: 'Português', value: 'pt'}
  ];
  selectedLang: string = 'en';

  onChange(newVal: string) {
    // visual-only callback. If you later add i18n, trigger it here.
    this.selectedLang = newVal;
    console.log('visual-only language selected:', newVal);
  }

  selectLanguage(lang: string) {
    this.selectedLang = lang;
    console.log('Language switched to:', lang);
    // here you can later call your i18n library
  }
}
