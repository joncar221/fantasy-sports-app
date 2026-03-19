import { Routes } from '@angular/router';
import { Account } from './account/account';
import { CreateLeaguePage } from './create-league-page/create-league-page';
import { Home } from './home/home';
import { League } from './league/league';
import { MockDraftLobby } from './mock-draft-lobby/mock-draft-lobby';
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
  {
    path: 'createleague',
    component: CreateLeaguePage,
  },
  {
    path: 'mockdraftlobby',
    component: MockDraftLobby,
  },
];
