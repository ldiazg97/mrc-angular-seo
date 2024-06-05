import { Routes } from '@angular/router';
import { WebsiteComponent } from './modules/maincontent/website/website.component';
import { SubscriptionComponent } from './modules/maincontent/subscription/subscription.component';
import { SitiosWebCompartidosComponent } from './modules/maincontent/website/sitios-web-compartidos/sitios-web-compartidos.component';
import { SupportComponent } from './modules/maincontent/support/support.component';
import { EvaluacionSeoComponent } from './modules/maincontent/evaluacion-seo/evaluacion-seo.component'; // Importa tu nuevo componente
import { AnalisisTelusComponent } from './modules/maincontent/analisis-telus/analisis-telus.component';

export const routes: Routes = [
    { path: 'sitios-web', component: WebsiteComponent, data: { title: 'Sitios Web', icon: 'pi pi-pen-to-square' } },
    { path: 'subscription', component: SubscriptionComponent, data: { title: 'Suscripción', icon: 'pi pi-envelope' } },
    { path: 'support', component: SupportComponent, data: { title: 'Acompañamiento', icon: 'pi pi-users' } },
    { path: 'sitios-compartidos', component: SitiosWebCompartidosComponent },
    { path: 'evaluacion-seo', component: EvaluacionSeoComponent, data: { title: 'Evaluación SEO', icon: 'pi pi-hammer' } }, // Agrega la nueva ruta
    { path: 'analisis-telus', component: AnalisisTelusComponent, data: { title: 'Análisis Telus', icon: 'pi pi-chart-line' } }, // Agrega la nueva ruta
    { path: '', redirectTo: '/sitios-web', pathMatch: 'full' }
];
