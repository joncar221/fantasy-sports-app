import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
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

  BASE_URL = import.meta.env.NG_APP_BACKEND_URL;

  leagueList: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getLeagues();
  }
  getLeagues() {
    this.http.get(`${this.BASE_URL}/leagues`).subscribe((result: any) => {
      this.leagueList = result;
    });
  }
}
