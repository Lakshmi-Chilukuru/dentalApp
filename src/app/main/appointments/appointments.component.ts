import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppointmentsData } from './data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.less'
})
export class AppointmentsComponent implements OnInit{
  public appData:any;
  
  ngOnInit(): void {
    this.appData = AppointmentsData
  }
}
