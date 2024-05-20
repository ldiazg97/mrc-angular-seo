import { Routes } from '@angular/router';
import { WebsiteComponent } from './modules/maincontent/website/website.component';
import { SubscriptionComponent } from './modules/maincontent/subscription/subscription.component';
import { SitiosWebCompartidosComponent } from './modules/maincontent/website/sitios-web-compartidos/sitios-web-compartidos.component';

export const routes: Routes = [
    { path: 'sitios-web', component: WebsiteComponent, data: { title: 'Sitios Web' } },
    { path: 'subscription', component: SubscriptionComponent, data: { title: 'Suscripción' } },
    { path: 'sitios-compartidos', component: SitiosWebCompartidosComponent },
    { path: '', redirectTo: '/sitios-web', pathMatch: 'full' }
];
