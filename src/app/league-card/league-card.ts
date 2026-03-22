import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-league-card',
  imports: [],
  templateUrl: './league-card.html',
  styleUrl: './league-card.css',
})
export class LeagueCard {
  @Input() leaguename: string = '';
}
