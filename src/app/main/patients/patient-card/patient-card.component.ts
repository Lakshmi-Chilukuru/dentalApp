import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Patient } from '../patient.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-card',
  standalone: true,
  imports: [ CommonModule,MatCardModule,MatInputModule,MatFormFieldModule],
  templateUrl: './patient-card.component.html',
  styleUrl: './patient-card.component.less'
})
export class PatientCardComponent implements OnInit{
  @Input() patients!:Patient[];
  constructor(private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
  getPatientDetail(id:string){
    this.router.navigate(['/patient',id],{relativeTo: this.route})
  }
}
