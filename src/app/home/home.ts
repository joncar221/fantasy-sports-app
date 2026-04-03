import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HeaderBar } from '../header-bar/header-bar';
import { LeagueCard } from '../league-card/league-card';
import { SidebarService } from '../sidebar-service';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [HeaderBar, Sidebar, LeagueCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  protected sidebarService = inject(SidebarService);

  BASE_URL = environment.apiUrl;
  leagueList: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getLeagues();
  }

  getLeagues() {
    if (environment.apiUrl) {
      this.http.get(`${this.BASE_URL}/leagues`).subscribe((result: any) => {
        this.leagueList = result;
        console.log(this.leagueList);
      });
    } else {
      console.warn('API URL not configured');
    }
  }
}
