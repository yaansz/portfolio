import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { SelectButtonModule } from 'primeng/selectbutton';

type LangOption = { label: string; value: string; emoji?: string; title?: string };

@Component({
  selector: 'app-menu-top-component-right',
  imports: [FormsModule, SelectButtonModule, ButtonModule, PopoverModule],
  templateUrl: './menu-top-component-right.html',
  styleUrl: './menu-top-component-right.css'
})
export class MenuTopComponentRight {

  langOptions: LangOption[] = [
    { label: 'English', value: 'en'},
    { label: 'Português', value: 'pt'}
  ];
  selectedLang: string = 'en';

}
