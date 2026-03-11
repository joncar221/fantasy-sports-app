import { Component, inject } from '@angular/core';
import { HeaderBar } from '../header-bar/header-bar';
import { SidebarService } from '../sidebar-service';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-account',
  imports: [HeaderBar, Sidebar],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
  protected sidebarService = inject(SidebarService);
}
