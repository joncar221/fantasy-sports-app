import { Routes } from '@angular/router';
import { Account } from './account/account';
import { Home } from './home/home';
import { League } from './league/league';
import { SettingsPage } from './settings-page/settings-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'league',
    component: League,
  },
  {
    path: 'account',
    component: Account,
  },
  {
    path: 'settings',
    component: SettingsPage,
  },
];
