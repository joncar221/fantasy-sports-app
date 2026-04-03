import { Component, inject } from '@angular/core';
import { HeaderBar } from '../header-bar/header-bar';
import { SidebarService } from '../sidebar-service';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-create-league-page',
  imports: [HeaderBar, Sidebar],
  templateUrl: './create-league-page.html',
  styleUrl: './create-league-page.css',
})
export class CreateLeaguePage {
  protected sidebarService = inject(SidebarService);
}
