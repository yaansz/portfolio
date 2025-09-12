import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { SelectButtonModule } from 'primeng/selectbutton';

type LangOption = { label: string; value: string; emoji?: string; title?: string };

@Component({
  selector: 'app-menu-top-component-right',
  imports: [FormsModule, SelectButtonModule, ButtonModule, PopoverModule, TranslatePipe, TranslateDirective],
  templateUrl: './menu-top-component-right.html',
  styleUrl: './menu-top-component-right.css'
})
export class MenuTopComponentRight implements AfterContentInit {

  readonly langOptions: LangOption[] = [
    { label: 'English', value: 'en'},
    { label: 'Português', value: 'pt'}
  ];
  selectedLang: string = 'en';

  constructor(private translate: TranslateService) {}
  ngAfterContentInit(): void {
    this.selectedLang = this.translate.getCurrentLang();
    console.log(this.selectedLang, this.translate.getBrowserLang())
  }

  setLanguage(lang : string) {
    this.translate.use(lang);
  }

}
