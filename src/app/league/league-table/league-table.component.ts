import { Club } from './../../../domain/club/club';
import { LeagueService } from './../../../service/leagueservice';
import { Component } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss',
})
export class LeagueTableComponent {
  clubs: Club[] = [];

  constructor(private LeagueService: LeagueService) {}

  ngOnInit(): void {
    this.LeagueService.season$.subscribe((season) => {
      this.clubs = season.clubs;
    });
  }
}
