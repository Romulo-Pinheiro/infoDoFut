import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { TeamRanking } from 'src/app/models/teamRanking';
import { Observable } from 'rxjs';
import { SelectTeam } from 'src/app/models/selectTeam';

enum QualificationEnum {
  'relegation' = 'Zona de rebaixamento',
  'sa-cup' = 'Fase de grupos (Sul-Americana)',
  'q-lib-cup' = 'Qualificatórias (Libertadores)',
  'lib-cup' = 'Fase de grupos (Libertadores)',
  '' = '',
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamsList?: SelectTeam[] = [];
  selectTeams$?: Observable<SelectTeam[]>;
  selectedTeam?: number;
  teamInfo?: TeamRanking;

  qualification = QualificationEnum;

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    if (!this.rankingService.rankingResult) {
      this.rankingService.getRanking().subscribe((data) => {
        this.rankingService.rankingResult = data;
        this.getTeamsInfo();
      });
    } else {
      this.getTeamsInfo();
    }
  }

  getTeamsInfo(): void {
    this.rankingService.rankingResult?.map((teamRanking: TeamRanking) => {
      this.teamsList?.push({
        id: teamRanking.time.time_id,
        nome_popular: teamRanking.time.nome_popular,
      });
      this.selectTeams$ = new Observable((observer) => {
        observer.next(this.teamsList);
      });
    });
  }

  getTeam(id?: number): void {
    this.teamInfo = this.rankingService.rankingResult?.find(
      (teamRanking) => teamRanking.time.time_id == id
    );
  }

  getQualification(position: number) {
    if (position >= 17) {
      return 'relegation';
    } else if (position <= 12 && position > 6) {
      return 'sa-cup';
    } else if (position <= 6 && position > 4) {
      return 'q-lib-cup';
    } else if (position <= 4) {
      return 'lib-cup';
    }
    return '';
  }
}
