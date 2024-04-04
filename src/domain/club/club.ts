import { MatchFixture } from './matchFixture';
import { MatchRecord } from './matchRecord';
import { ClubStats } from './clubStats';

export interface Club {
  id: number;
  clubName: string;
  clubShortName: string;
  leagueName: string;
  abbr: string;
  clubStats: ClubStats;
  matchRecords: {
    homeRecord: MatchRecord;
    awayRecord: MatchRecord;
  };
  matchFixtures?: {
    pastMatches: MatchFixture[];
    futureMatches: MatchFixture[];
    mostRecentMatch: MatchFixture;
    upcomingMatch: MatchFixture;
  };
}
