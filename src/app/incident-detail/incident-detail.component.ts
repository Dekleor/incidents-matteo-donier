import { Component, OnInit } from '@angular/core';
import {Incident} from '../../model/Incident';
import {IncidentHttpService} from '../incident-http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {

  incident: Incident;

  constructor(private detailIncident: IncidentHttpService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  getIncident(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.detailIncident.getIncident(Number(id)).subscribe(incidents => this.incident = incidents);
  }

  delete() {
    return this.detailIncident.deleteIncident(this.incident.id).subscribe(s => this.router.navigateByUrl('/home'));
  }

  ngOnInit(): void {
    this.getIncident();
  }

  closeIncident(): void {
    if (this.incident.open === true) {
      const update = this.incident.open = false;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.detailIncident.updateIncident(Number(id), update).subscribe();
    }
  }
}
