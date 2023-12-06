import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { Round } from 'src/app/models/round';
import { RoundsService } from 'src/app/services/rounds.service';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css'],
})
export class RoundsComponent implements OnInit {
  currentRound?: any;
  matches?: Match[];

  constructor(private roundsService: RoundsService) {}

  ngOnInit(): void {
    if (!this.roundsService.stageResult) {
      this.roundsService.getStage().subscribe((data) => {
        this.roundsService.stageResult = data;
        this.currentRound =
          this.roundsService.stageResult.campeonato.rodada_atual.rodada;

        this.roundsService
          .getRound(this.currentRound)
          .subscribe((data: Round) => {
            this.roundsService.roundResult = data;
            this.matches = this.roundsService.roundResult.partidas;
          });
      });
    } else {
      this.currentRound =
        this.roundsService.stageResult.campeonato.rodada_atual.rodada;
      this.matches = this.roundsService.roundResult?.partidas;
    }
  }
}
