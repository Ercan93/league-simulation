import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueFixturesComponent } from './league-fixtures/league-fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { LeagueResultsComponent } from './league-results/league-results.component';



@NgModule({
  declarations: [
    LeagueFixturesComponent,
    LeagueTableComponent,
    LeagueResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeagueModule { }
