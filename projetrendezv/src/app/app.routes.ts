import { Routes } from '@angular/router';
import { DashboardComponent } from './features/private/dashboard/dashboard.component';
import { FormDemandeComponent } from './features/private/demande-rv/form-demande/form-demande.component';
import { ListDemandesComponent } from './features/private/demande-rv/list-demandes/list-demandes.component';
import { DossierMedicalComponent } from './features/private/dossier-medical/dossier-medical.component';
import { OrdonnanceComponent } from './features/private/ordonnance/ordonnance.component';
import { RvComponent } from './features/private/rv/rv.component';
import { RdvDetailsComponent } from './features/private/rv/rdv-details/rdv-details.component';
import { LoginComponent } from './features/public/login/login.component';
import { PublicComponent } from './features/public/public.component';
import { PrivateComponent } from './features/private/private.component';

export const routes: Routes = [
    {
        path: 'public',
        component: PublicComponent,
        children: [
            {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
            },
            {
            path: 'login',
            component: LoginComponent

            }

        ]
    },


    {
        path: 'private',
        component: PrivateComponent,
        children: [
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
            path: 'form-demande',
            component: FormDemandeComponent
        },
        {
            path: 'list-demandes',
            component: ListDemandesComponent
        },
        {
            path: 'dossier',
            component: DossierMedicalComponent
        },
        {
            path: 'ordonnance',
            component: OrdonnanceComponent
        },
        {
            path: 'rv',
            component: RvComponent
        },
        {
            path: 'rdv-details',
            component: RdvDetailsComponent
        },
        ]
    },

    {
        path: '',
        redirectTo: '/public/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/public/login',
        pathMatch: 'full'
    }

];
