import { Component, OnInit } from '@angular/core';
import {IncidentHttpService} from '../incident-http.service';
import {Incident} from '../../model/Incident';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  constructor(private http: IncidentHttpService) { }
  allIncidents: Incident[];

  getIncidents():void {
    this.http.getIncidents().subscribe(foo => this.allIncidents = foo);
  }

  ngOnInit(): void {
    this.getIncidents();
  }

}
