import { Component } from '@angular/core';
import { LeagueService } from '../../../service/leagueservice';

@Component({
  selector: 'app-league-actions',
  templateUrl: './league-actions.component.html',
  styleUrl: './league-actions.component.scss',
})
export class LeagueActionsComponent {
  constructor(private leagueService: LeagueService) {}

  simulationWeek(): void {
    this.leagueService.simulateWeek();
  }

  simulationSeason(): void {
    this.leagueService.simulateSeason();
  }
}
