import { Routes } from '@angular/router';
import { HomeComponent } from './webPage/home/home.component';
import { UsComponent } from './webPage/us/us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'us', component: UsComponent },
];
