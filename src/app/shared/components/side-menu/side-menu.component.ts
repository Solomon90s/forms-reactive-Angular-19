import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { MenuItem } from '../../../interface/menu-item.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

const reactiveItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  reactiveMenuItem: MenuItem[] = reactiveItems
    .filter((item) => item.path !== '**')
    .map((item) => ({
      route: `reactive/${item.path}`,
      title: `${item.title}`,
    }));

  authMenuItem: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];
  countryMenuItem: MenuItem[] = [
    {
      title: 'Países',
      route: './country',
    },
  ];
}
