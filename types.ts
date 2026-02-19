
export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  homeScore: number;
  awayScore: number;
  minute: number;
  status: 'LIVE' | 'FINISHED' | 'UPCOMING';
  stats: {
    homeShots: number;
    awayShots: number;
    homePos: number;
    awayPos: number;
  };
}

export interface Alert {
  id: string;
  matchId: string;
  type: 'GOAL' | 'DANGER' | 'MOMENTUM' | 'AI_PICK';
  message: string;
  timestamp: string;
  minute: number;
  isConfirmed: boolean;
  accuracyScore?: number;
}

export interface StatPoint {
  date: string;
  accuracy: number;
  volume: number;
}
