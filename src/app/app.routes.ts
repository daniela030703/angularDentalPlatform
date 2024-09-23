import { Routes } from '@angular/router';
import { HomeComponent } from './webPage/home/home.component';
import { UsComponent } from './webPage/us/us.component';
import { SingInComponent } from './modules/auth/sing-in/sing-in.component';
import path from 'path';
import { Component } from '@angular/core';
import { WebPageComponent } from './webPage/web-page.component';

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
   
    { path: 'signIn', component: SingInComponent },


];
