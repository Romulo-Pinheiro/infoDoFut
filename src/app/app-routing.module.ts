import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { RoundsComponent } from './components/rounds/rounds.component';

const routes: Routes = [
  { path: '', component: RankingComponent },
  { path: 'rounds', component: RoundsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
