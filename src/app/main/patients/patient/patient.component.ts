import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Teeth } from './data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.less'
})
export class PatientComponent implements OnInit{
  public tooth!:Teeth[];
  treatmentType :String[] = ['healthy','cavity','filled','crown','rootcanal','missing'];
  // public showTeeth :boolean = false;
  teeth_num: number =0;
  teethCondition!: String;
  @ViewChild('showTeeth',{static:false}) showTeeth!:TemplateRef<any> ;
  ngOnInit(): void {

    this.tooth = Array.from({length:32}).map((_,i) :Teeth=>{
      return{
        teeth:i+1,
        treatment : this.treatmentType[Math.floor(Math.random()*this.treatmentType.length)]
      }
    })
    console.log(this.tooth)
  }

  toothDetail(index:number,te:Teeth){
    return te.teeth;
  }

  showTeethType(teeth:Teeth){
    this.teeth_num = teeth.teeth;
    this.teethCondition = teeth.treatment;
  }
}
