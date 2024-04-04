export interface TeamPerformance {
  attackRating: number;
  defenseRating: number;
  midfieldRating: number;
  overallRating: number;
}

export interface MatchOutcome {
  winCount: number;
  drawCount: number;
  lossCount: number;
}

export interface GoalStats {
  goalsScored: number;
  goalsConceded: number;
  goalDifference: number;
}

export interface ClubStats {
  leaguePosition: number;
  totalPoints: number;
  performance: TeamPerformance;
  goals: GoalStats;
  totalMatchesPlayed: number;
  matchOutcome: MatchOutcome;
}