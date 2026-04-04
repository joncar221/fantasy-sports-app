import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../environments/environment';
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

  BASE_URL = environment.apiUrl;

  leagueName = '';

  constructor(private http: HttpClient) {}

  createLeague() {
    if (environment.apiUrl) {
      this.http
        .post(`${this.BASE_URL}/leagues`, { name: this.leagueName, description: 'TEST' })
        .subscribe((result: any) => {
          console.log(result);
        });
    } else {
      console.warn('API URL not configured');
    }
  }

  getLeagueName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.leagueName = name;
  }
}
