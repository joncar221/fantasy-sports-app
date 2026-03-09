import { Component, inject } from '@angular/core';
import { SidebarService } from '../sidebar-service';

@Component({
  selector: 'app-header-bar',
  imports: [],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css',
})
export class HeaderBar {
  protected sidebarService = inject(SidebarService);
}
