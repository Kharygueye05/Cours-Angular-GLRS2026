import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DemandeRvComponent } from './features/demande-rv/demande-rv.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dash',
        pathMatch: 'full'
    },
    {
        path: 'dash',
        component: DashboardComponent
    },
    {
        path: 'drv',
        component: DemandeRvComponent
    }
];
