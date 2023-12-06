import { Match } from './match';

type SummaryRound = {
  nome: string;
  slug: string;
  rodada: number;
  status: string;
};

export interface Round {
  nome: string;
  slug: string;
  rodada: number;
  proxima_rodada: SummaryRound;
  rodada_anterior: SummaryRound;
  partidas: Match[];
  _link: string;
}
