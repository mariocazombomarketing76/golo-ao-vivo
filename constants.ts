
import { Match, Alert, StatPoint } from './types';

export const MOCK_MATCHES: Match[] = [
  {
    id: '1',
    homeTeam: 'Manchester City',
    awayTeam: 'Real Madrid',
    league: 'Liga dos Campeões',
    homeScore: 1,
    awayScore: 1,
    minute: 74,
    status: 'LIVE',
    stats: { homeShots: 12, awayShots: 8, homePos: 55, awayPos: 45 }
  },
  {
    id: '2',
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool',
    league: 'Premier League',
    homeScore: 0,
    awayScore: 0,
    minute: 32,
    status: 'LIVE',
    stats: { homeShots: 4, awayShots: 3, homePos: 50, awayPos: 50 }
  },
  {
    id: '3',
    homeTeam: 'Bayern Munique',
    awayTeam: 'Dortmund',
    league: 'Bundesliga',
    homeScore: 3,
    awayScore: 1,
    minute: 88,
    status: 'LIVE',
    stats: { homeShots: 18, awayShots: 11, homePos: 62, awayPos: 38 }
  },
  {
    id: '4',
    homeTeam: 'Petro de Luanda',
    awayTeam: 'Primeiro de Agosto',
    league: 'Girabola',
    homeScore: 2,
    awayScore: 0,
    minute: 60,
    status: 'FINISHED',
    stats: { homeShots: 10, awayShots: 5, homePos: 58, awayPos: 42 }
  },
  {
    id: '5',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    league: 'La Liga',
    homeScore: 2,
    awayScore: 2,
    minute: 85,
    status: 'FINISHED',
    stats: { homeShots: 15, awayShots: 14, homePos: 48, awayPos: 52 }
  }
];

export const MOCK_ALERTS: Alert[] = [
  {
    id: 'a1',
    matchId: '1',
    type: 'DANGER',
    message: 'Pressão alta do Man City - 3 cantos nos últimos 5 min.',
    timestamp: new Date().toISOString(),
    minute: 72,
    isConfirmed: true,
    accuracyScore: 94
  },
  {
    id: 'a2',
    matchId: '2',
    type: 'AI_PICK',
    message: 'Modelo IA prevê Mais de 0.5 Golos na 1ª Parte baseado na intensidade.',
    timestamp: new Date().toISOString(),
    minute: 28,
    isConfirmed: false
  },
  {
    id: 'a3',
    matchId: '4',
    type: 'GOAL',
    message: 'Golo iminente do Petro! Pressão asfixiante na área adversária.',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    minute: 55,
    isConfirmed: true,
    accuracyScore: 91
  },
  {
    id: 'a4',
    matchId: '5',
    type: 'MOMENTUM',
    message: 'El Clásico ao rubro! Ambas as equipas com transições rápidas.',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    minute: 80,
    isConfirmed: true,
    accuracyScore: 88
  },
  {
    id: 'a5',
    matchId: '2',
    type: 'DANGER',
    message: 'Arsenal encosta Liverpool às cordas. 4 remates em 2 minutos.',
    timestamp: new Date().toISOString(),
    minute: 40,
    isConfirmed: true,
    accuracyScore: 96
  }
];

export const HISTORY_STATS: StatPoint[] = [
  { date: 'Seg', accuracy: 82, volume: 45 },
  { date: 'Ter', accuracy: 85, volume: 52 },
  { date: 'Qua', accuracy: 78, volume: 68 },
  { date: 'Qui', accuracy: 91, volume: 40 },
  { date: 'Sex', accuracy: 88, volume: 75 },
  { date: 'Sáb', accuracy: 92, volume: 120 },
  { date: 'Dom', accuracy: 89, volume: 110 },
];
