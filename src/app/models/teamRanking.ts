import { Team } from './team';

export interface TeamRanking {
  posicao: number;
  pontos: number;
  time: Team;
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  aproveitamento: number;
  variacao_posicao: number;
  ultimos_jogos: string[];
}
