import { Component, OnInit } from '@angular/core';
import { Card, Treatment } from './data.model';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink, DatePipe,LoaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent implements OnInit {
  public cardData!:Card [];
  public treatmentDetails!:Treatment[];
  patients!:any[];

  ngOnInit(): void {
    setTimeout(()=>{
      this.cardData = [
      {type:"Today's Appointments", count:12,menuLogo: 'calendar_today',},
      {type:"Total Patients", count : 847,menuLogo: 'group',},
      {type:"Pending Treatments",count:23,menuLogo: 'group',},
      {type: "Monthly Revenue", count:42.5,menuLogo: 'group',}
    ]
    },2000)
    this.treatmentDetails= [
      {time: "9:00",name:'lakshmi',treatmentType:"RootCanal",status:"Pending"},
      {time: "9:00",name:'lakshmi',treatmentType:"RootCanal",status:"In Progress"},
      {time: "9:00",name:'lakshmi',treatmentType:"RootCanal",status:"Completed"},
      {time: "9:00",name:'lakshmi',treatmentType:"RootCanal",status:"Upcoming"},
      {time: "9:00",name:'lakshmi',treatmentType:"RootCanal",status:"Pending"}
    ]
    this.patients = [
      {patient:"lakshmi",lastVisit:new Date()},
      {patient:"lakshmi",lastVisit:new Date()},
      {patient:"lakshmi",lastVisit:new Date()},
      {patient:"lakshmi",lastVisit:new Date()},
    ]
  }
}
