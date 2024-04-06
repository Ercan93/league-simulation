import { Season } from './../domain/season';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Club } from '../domain/club/club';
import { MatchFixture } from '../domain/club/matchFixture';

const TEAMS = [
  {
    name: 'Galatasaray SK',
    shortName: 'Galatasaray',
    abbr: 'GAL',
    attackRating: 80,
    defenseRating: 70,
    midfieldRating: 75,
    overallRating: 75,
  },
  {
    name: 'Fenerbahce SK',
    shortName: 'Fenerbahce',
    abbr: 'FEN',
    attackRating: 75,
    defenseRating: 70,
    midfieldRating: 85,
    overallRating: 77,
  },
  {
    name: 'Besiktas JK',
    shortName: 'Besiktas',
    abbr: 'BES',
    attackRating: 75,
    defenseRating: 70,
    midfieldRating: 75,
    overallRating: 70,
  },
  {
    name: 'Trabzonspor',
    shortName: 'Trabzonspor',
    abbr: 'TRA',
    attackRating: 70,
    defenseRating: 60,
    midfieldRating: 70,
    overallRating: 65,
  },
  {
    name: 'Bursaspor',
    shortName: 'Bursaspor',
    abbr: 'BUR',
    attackRating: 70,
    defenseRating: 60,
    midfieldRating: 70,
    overallRating: 65,
  },
  {
    name: 'Sivasspor',
    shortName: 'Sivasspor',
    abbr: 'SIV',
    attackRating: 70,
    defenseRating: 60,
    midfieldRating: 70,
    overallRating: 65,
  },
];

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private seasonSubject = new BehaviorSubject<Season>({
    id: 0,
    seasonName: '',
    startDate: '',
    endDate: '',
    leagueName: '',
    matchFixtures: [],
    clubs: [],
  });
  season$ = this.seasonSubject.asObservable();

  private matchFixturesSubject = new BehaviorSubject<MatchFixture[]>([]);
  matchFixtures$ = this.matchFixturesSubject.asObservable();

  setSeason(season: Season): void {
    this.seasonSubject.next(season);
  }

  setClubs(clubs: Club[]): void {
    const season = this.seasonSubject.value;
    if (season) {
      season.clubs = clubs;
      this.seasonSubject.next(season);
    }
  }

  getSeason(): Observable<Season | null> {
    return this.season$;
  }

  getClubs(): Observable<Club[]> {
    return new Observable((observer) => {
      const season = this.seasonSubject.value;
      if (season) {
        observer.next(season.clubs);
        observer.complete();
      }
    });
  }

  getTeams(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(TEAMS);
      observer.complete();
    });
  }

  getClubById(id: number): Observable<Club> {
    return new Observable((observer) => {
      const clubs = this.seasonSubject.value?.clubs;
      if (clubs) {
        const club = clubs.find((c) => c.id === id);
        observer.next(club);
        observer.complete();
      }
    });
  }

  updateClubStats(club: Club): void {
    const clubs = this.seasonSubject.value?.clubs;
    if (clubs) {
      const index = clubs.findIndex((c) => c.id === club.id);
      clubs[index] = club;
      this.setClubs(clubs);
    }
  }

  createClubs(leagueName: string): void {
    const clubs: Club[] = TEAMS.map((team, index) => {
      return {
        id: index + 1,
        clubName: team.name,
        clubShortName: team.shortName,
        leagueName,
        abbr: team.abbr,
        clubStats: {
          leaguePosition: index + 1,
          totalPoint: 0,
          performance: {
            attackRating: team.attackRating,
            defenseRating: team.defenseRating,
            midfieldRating: team.midfieldRating,
            overallRating: team.overallRating,
          },
          goals: {
            goalsScored: 0,
            goalsConceded: 0,
            goalDifference: 0,
          },
          totalMatchesPlayed: 0,
          matchOutcome: {
            winCount: 0,
            drawCount: 0,
            lossCount: 0,
          },
        },
        matchRecords: {
          homeRecord: {
            winCount: 0,
            drawCount: 0,
            lossCount: 0,
          },
          awayRecord: {
            winCount: 0,
            drawCount: 0,
            lossCount: 0,
          },
        },
      };
    });

    this.setClubs(clubs);
  }

  createSeason(
    leagueName: string,
    seasonName: string,
    startDate: string,
    endDate: string
  ): void {
    this.createClubs(leagueName);
    const clubs = this.seasonSubject.value?.clubs;

    const matchFixtures = this.generateSeasonFixtures(clubs);
    const season: Season = {
      id: 1,
      seasonName,
      startDate,
      endDate,
      leagueName,
      matchFixtures,
      clubs,
    };
    this.setSeason(season);
  }

  generateSeasonFixtures(clubs: Club[]): MatchFixture[] {
    let seasonMatchFixtures: MatchFixture[] = [];

    let matchweeks: any[][] = [];
    let teams = clubs.map((club) => club.clubName);

    if (teams.length % 2) {
      teams.push('None');
    }

    const rounds = teams.length;

    for (let j = 0; j < (rounds - 1) * 2; j++) {
      matchweeks[j] = [];

      for (let i = 0; i < rounds / 2; i++) {
        if (teams[i] !== 'None' && teams[rounds - 1 - i] !== 'None') {
          let homeTeam, awayTeam;

          if (j % 2 == 1) {
            homeTeam = teams[i];
            awayTeam = teams[rounds - 1 - i];
          } else {
            homeTeam = teams[rounds - 1 - i];
            awayTeam = teams[i];
          }
          matchweeks[j].push([homeTeam, awayTeam]);

          const fixture: MatchFixture = {
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            matchweek: j + 1,
          };
          seasonMatchFixtures.push(fixture);
        }
      }
      const t = teams.pop();
      if (t) teams.splice(1, 0, t);
    }

    return seasonMatchFixtures;
  }
}
