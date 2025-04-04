import { Component } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  imports: [],
  templateUrl: './change-theme.component.html',
  styleUrl: './change-theme.component.css',
})
export class ChangeThemeComponent {
  changeToDarkTheme = (): void => {
    document.querySelector('body')?.setAttribute('data-bs-theme', 'dark');
    document.querySelector('#dl-icon')?.setAttribute('class', 'bi bi-sun-fill');
  };

  changeToLightTheme = (): void => {
    document.querySelector('body')?.setAttribute('data-bs-theme', 'light');
    document
      .querySelector('#dl-icon')
      ?.setAttribute('class', 'bi bi-moon-fill');
  };

  changeTheme = (): void => {
    document.querySelector('body')?.getAttribute('data-bs-theme') === 'light'
      ? this.changeToDarkTheme()
      : this.changeToLightTheme();
  };
}
