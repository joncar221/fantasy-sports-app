import { Component, inject } from '@angular/core';
import { HeaderBar } from '../header-bar/header-bar';
import { SidebarService } from '../sidebar-service';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-league',
  imports: [HeaderBar, Sidebar],
  templateUrl: './league.html',
  styleUrl: './league.css',
})
export class League {
  protected sidebarService = inject(SidebarService);
}
