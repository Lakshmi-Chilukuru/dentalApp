import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient, patientDetails } from './patient.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PatientCardComponent } from './patient-card/patient-card.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [FormsModule, CommonModule,MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,PatientCardComponent],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.less'
})
export class PatientsComponent implements OnInit {
  public searchPatient!:string
  public patients!:Patient[];
  ngOnInit(): void {
    this.patients = patientDetails
  }
  onSearchChange(){
    console.log(this.searchPatient)
  }

  
}
