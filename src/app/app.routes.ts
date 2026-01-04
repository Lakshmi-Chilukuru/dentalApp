import { Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';


export const routes: Routes = [
    {
        path:'dashboard',loadComponent:()=>import('./main/dashboard/dashboard.component').then(m=>m.DashboardComponent)
    },
    {
        path:'appointments',loadComponent:()=>import('./main/appointments/appointments.component').then(m=>m.AppointmentsComponent)
    },
    {
        path:'patients',loadComponent:()=>import('./main/patients/patients.component').then(m=>m.PatientsComponent),
    },
    {
        path:'patient/:id',loadComponent:()=>import('./main/patients/patient/patient.component').then(m=>m.PatientComponent),
    },
    {
        path:'treatments',loadComponent:()=>import('./main/treatment/treatment.component').then(m=>m.TreatmentComponent)
    },
    {
        path:'billing',loadComponent:()=>import('./main/billing/billing.component').then(m=>m.BillingComponent)
    },
    {
        path:'settings',loadComponent:()=>import('./main/settings/settings.component').then(m=>m.SettingsComponent)
    },
    {
        path:'',redirectTo:'dashboard',pathMatch:'full'
    }
];
