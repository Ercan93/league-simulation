import { Observable, range } from 'rxjs';
import { map, toArray, switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { MatchFixture } from '../../../domain/club/matchFixture';
import { LeagueService } from '../../../service/leagueservice';

@Component({
  selector: 'app-league-fixtures',
  templateUrl: './league-fixtures.component.html',
  styleUrl: './league-fixtures.component.scss',
})
export class LeagueFixturesComponent {
  fixtures: MatchFixture[][] = [];

  constructor(private leagueService: LeagueService) {}

  ngOnInit(): void {
    this.getMatchweeks(this.leagueService.matchFixtures$).subscribe(
      (matchweeks) => (this.fixtures = matchweeks)
    );
  }

  getMatchweeks(
    matchFixtures$: Observable<MatchFixture[]>
  ): Observable<MatchFixture[][]> {
    return matchFixtures$.pipe(
      switchMap((matchFixtures) =>
        range(1, matchFixtures.length / 3).pipe(
          map((matchweek) =>
            matchFixtures.filter(
              (matchFixture) => matchFixture.matchweek === matchweek
            )
          ),
          toArray()
        )
      )
    );
  }
}
