import { MatchFixture } from './matchFixture';
import { MatchRecord } from './matchRecord';
import { ClubStats } from './clubStats';

export interface Club {
  clubName: string;
  clubShortName: string;
  leagueName: string;
  clubStats: ClubStats;
  matchRecords: {
    homeRecord: MatchRecord;
    awayRecord: MatchRecord;
  };
  matchFixtures: {
    pastMatches: MatchFixture[];
    futureMatches: MatchFixture[];
    mostRecentMatch: MatchFixture;
    upcomingMatch: MatchFixture;
  };
}
