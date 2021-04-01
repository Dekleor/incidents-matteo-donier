import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IncidentHttpService} from '../incident-http.service';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {

  newIncident: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: IncidentHttpService) { }

  ngOnInit(): void {
    this.newIncident = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      level: ['', Validators.required],
      type: ['', Validators.required],
      progress: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      open: [true]
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.newIncident.valid) {
      this.submitted = false;
      const formValues = this.newIncident.value;
      this.http.addIncident(formValues).subscribe();
      this.newIncident.reset();
    }
  }
}
