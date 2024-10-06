import { Routes } from '@angular/router';
import { HomeComponent } from './webPage/home/home.component';
import { UsComponent } from './webPage/us/us.component';
import { SingInComponent } from './modules/auth/sing-in/sing-in.component';
import path from 'path';
import { Component } from '@angular/core';
import { WebPageComponent } from './webPage/web-page.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { ServicesComponent } from './modules/admin/services/services.component';
import { MedicosComponent } from './modules/admin/medicos/medicos.component';
import { PacientesComponent } from './modules/admin/pacientes/pacientes.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AddServiceComponent } from './modules/admin/services/add-service/add-service.component';
import { AddMedicoComponent } from './modules/admin/medicos/add-medico/add-medico.component';
import { AuthGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
    { path: '', component: WebPageComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            { path: 'us', 
              component: UsComponent
            },
        ]
     },
   
    { path: 'sign-in', component: SingInComponent },
    { path: 'sign-up', component: SignUpComponent },

    {
        path: 'dashboard', component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'add-service', component: AddServiceComponent },
            { path: 'medicos', component: MedicosComponent },
            { path: 'add-medico', component: AddMedicoComponent},
            { path: 'pacientes', component: PacientesComponent },
        ]
    }
   



];
