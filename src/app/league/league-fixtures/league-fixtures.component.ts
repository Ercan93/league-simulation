import { Observable, range } from 'rxjs';
import { map, toArray, switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { MatchFixture } from '../../../domain/club/matchFixture';
import { LeagueService } from '../../../service/leagueservice';
import { Season } from '../../../domain/season';

@Component({
  selector: 'app-league-fixtures',
  templateUrl: './league-fixtures.component.html',
  styleUrl: './league-fixtures.component.scss',
})
export class LeagueFixturesComponent {
  fixtures: MatchFixture[][] = [];

  constructor(private leagueService: LeagueService) {}

  ngOnInit(): void {
    this.getMatchweeks(this.leagueService.season$).subscribe(
      (matchweeks) => (this.fixtures = matchweeks)
    );
  }

  getMatchweeks(season$: Observable<Season>): Observable<MatchFixture[][]> {
    return season$.pipe(
      switchMap((season) =>
        range(1, (season.clubs.length - 1) * 2).pipe(
          map((i) =>
            season.matchFixtures.filter((fixture) => fixture.matchweek === i)
          ),
          toArray()
        )
      )
    );
  }
}
