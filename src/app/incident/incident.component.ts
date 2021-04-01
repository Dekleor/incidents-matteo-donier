import {Component, Input, OnInit} from '@angular/core';
import {Incident} from '../../model/Incident';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  constructor() { }

  @Input() incident: Incident;

  ngOnInit(): void {
  }

}
