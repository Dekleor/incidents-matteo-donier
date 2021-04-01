import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncidentComponent } from './incident/incident.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    IncidentListComponent,
    IncidentAddComponent,
    IncidentDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
