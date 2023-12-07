import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: '', component: RankingComponent },
  { path: 'rounds', component: RoundsComponent },
  { path: 'team', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
