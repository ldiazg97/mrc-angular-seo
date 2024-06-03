import { Routes } from '@angular/router';
import { WebsiteComponent } from './modules/maincontent/website/website.component';
import { SubscriptionComponent } from './modules/maincontent/subscription/subscription.component';
import { SitiosWebCompartidosComponent } from './modules/maincontent/website/sitios-web-compartidos/sitios-web-compartidos.component';
import { SupportComponent } from './modules/maincontent/support/support.component';

export const routes: Routes = [
    { path: 'sitios-web', component: WebsiteComponent, data: { title: 'Sitios Web', icon:'pi pi-pen-to-square' } },
    { path: 'subscription', component: SubscriptionComponent, data: { title: 'Suscripción' , icon:'pi pi-envelope'} },
    { path: 'support', component: SupportComponent, data: { title: 'Acompañamiento' , icon:'pi pi-users'} },
    { path: 'sitios-compartidos', component: SitiosWebCompartidosComponent },
    { path: '', redirectTo: '/sitios-web', pathMatch: 'full' }
];
