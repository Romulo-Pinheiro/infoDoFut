import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Round } from '../models/round';

@Injectable({
  providedIn: 'root',
})
export class RoundsService {
  private apiUrl: string = 'https://api.api-futebol.com.br/v1/campeonatos/10';
  private apiKey: string = environment.apiKey;
  private headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.apiKey}`,
  });

  stageResult?: any;
  roundResult?: Round;
  rankingResult?: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  getStage(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/fases/317`, {
      headers: this.headers,
    });
  }

  getRound(round: number): Observable<Round> {
    return this.httpClient.get<Round>(`${this.apiUrl}/rodadas/${round}`, {
      headers: this.headers,
    });
  }
}
