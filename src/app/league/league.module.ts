import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeagueFixturesComponent } from './league-fixtures/league-fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { LeagueResultsComponent } from './league-results/league-results.component';
import { LeagueActionsComponent } from './league-actions/league-actions.component';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LeagueFixturesComponent,
    LeagueTableComponent,
    LeagueResultsComponent,
    LeagueActionsComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FieldsetModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    LeagueFixturesComponent,
    LeagueTableComponent,
    LeagueResultsComponent,
    LeagueActionsComponent,
  ],
})
export class LeagueModule {}
