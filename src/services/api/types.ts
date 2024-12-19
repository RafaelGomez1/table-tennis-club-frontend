// Add these types to the existing types file
export interface RegisteredPlayer {
  name: string;
}

export interface AvailableHour {
  id: string;
  from: number;
  to: number;
  capacity: {
    value: number;
  };
  type: string;
  registeredPlayers: RegisteredPlayer[];
}

export interface Agenda {
  id: string;
  day: {
    number: number;
    dayOfWeek: string;
  };
  month: string;
  week: number;
  year: number;
  availableHours: AvailableHour[];
}

export interface MatchResult {
  name: 'WON' | 'LOST' | 'NOT_PLAYED';
  gamesWon: number;
  gamesLost: number;
}

export interface Match {
  id: string;
  visitorClub: string;
  result: MatchResult;
  dateTime: string;
  homeGame: boolean;
}

export interface ClubCalendar {
  id: string;
  clubName: string;
  league: string;
  matches: Match[];
}

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  winRate: number;
}

export interface RankedPlayer {
  id: number;
  name: string;
  club: string;
  stats: GameStats;
  rankingPoints: number;
}

export interface LeagueStanding {
  id: string;
  club: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  setsWon: number;
  setsLost: number;
  points: number;
  standing: number;
}

export interface LeagueRanking {
  id: string;
  name: string;
  players: RankedPlayer[];
  standings: Record<string, LeagueStanding[]>;
}