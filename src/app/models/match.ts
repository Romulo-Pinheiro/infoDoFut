import { Team } from './team';

export interface Match {
  partida_id: number;
  campeonato: {
    campeonato_id: number;
    nome: string;
    slug: string;
  };
  placar: string;
  time_mandante: Team;
  time_visitante: Team;
  placar_mandante: number;
  placar_visitante: number;
  disputa_penalti: boolean;
  status: string;
  slug: string;
  data_realizacao: string;
  hora_realizacao: string;
  data_realizacao_iso: string;
  estadio: {
    estadio_id: number;
    nome_popular: string;
  };
  _link: string;
}
