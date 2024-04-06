import { Component } from '@angular/core';
import { LeagueService } from '../../../service/leagueservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private leagueService: LeagueService) {
    this.leagueService.createSeason(
      'Super Lig',
      '2023-2024',
      'Eylül 2023',
      'Mayıs 2024'
    );
    console.log('Season created');
  }
}
