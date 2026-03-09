import { Component, inject } from '@angular/core';
import { HeaderBar } from '../header-bar/header-bar';
import { SidebarService } from '../sidebar-service';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [HeaderBar, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected sidebarService = inject(SidebarService);
}
