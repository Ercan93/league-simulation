import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueFixturesComponent } from './league-fixtures/league-fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';



@NgModule({
  declarations: [
    LeagueFixturesComponent,
    LeagueTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeagueModule { }
