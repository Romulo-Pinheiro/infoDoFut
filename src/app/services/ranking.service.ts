import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamRanking } from '../models/teamRanking';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private apiUrl: string = 'https://api.api-futebol.com.br/v1/campeonatos/10';
  private apiKey: string = environment.apiKey;
  private headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.apiKey}`,
  });

  rankingResult?: TeamRanking[];

  constructor(private httpClient: HttpClient) {}

  getRanking(): Observable<TeamRanking[]> {
    return this.httpClient.get<TeamRanking[]>(`${this.apiUrl}/tabela`, {
      headers: this.headers,
    });
  }
}
