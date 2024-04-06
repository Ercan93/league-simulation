import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeagueFixturesComponent } from './league-fixtures/league-fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { LeagueResultsComponent } from './league-results/league-results.component';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    LeagueFixturesComponent,
    LeagueTableComponent,
    LeagueResultsComponent,
  ],
  imports: [CommonModule, TableModule, FieldsetModule, BrowserAnimationsModule],
  exports: [
    LeagueFixturesComponent,
    LeagueTableComponent,
    LeagueResultsComponent,
  ],
})
export class LeagueModule {}
