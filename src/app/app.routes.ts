import { Routes } from '@angular/router';
import { WebsiteComponent } from './modules/maincontent/website/website.component';
import { SubscriptionComponent } from './modules/maincontent/subscription/subscription.component';
import { SitiosWebCompartidosComponent } from './modules/maincontent/website/sitios-web-compartidos/sitios-web-compartidos.component';
import { SitiosCompartidosComponent } from './modules/maincontent/website/sitios-compartidos/sitios-compartidos.component';
import { SupportComponent } from './modules/maincontent/support/support.component';
import { EvaluacionSeoComponent } from './modules/maincontent/evaluacion-seo/evaluacion-seo.component'; // Importa tu nuevo componente
import { AnalisisTelusComponent } from './modules/maincontent/analisis-telus/analisis-telus.component';
import { TelusGrupalComponent } from './modules/maincontent/telus-grupal/telus-grupal.component';
import { DiagnosticoSeoComponent } from './modules/maincontent/diagnostico-seo/diagnostico-seo.component';
import { SitesComponent } from './modules/navpanel/header/seguimiento/seguimiento-menu/sites/sites.component';
import { VarValComponent } from './modules/navpanel/header/seguimiento/seguimiento-menu/var-val/var-val.component';
import { CommentComponent } from './modules/navpanel/header/seguimiento/seguimiento-menu/comment/comment.component';
import { WebmasterComponent } from './modules/navpanel/header/seguimiento/seguimiento-menu/webmaster/webmaster.component';
import { SitesEnpruebaComponent } from './modules/navpanel/header/seguimiento/seguimiento-menu/sites-enprueba/sites-enprueba.component';
import { SitesSendComponent } from './modules/navpanel/header/seguimiento/seguimiento-menu/sites-send/sites-send.component';
import { AccesosComponent } from './modules/navpanel/header/seguimiento/auditoria/accesos/accesos.component';
import { AyudaComponent } from './modules/navpanel/header/seguimiento/config-menu/ayuda/ayuda.component';
import { BloquesComponent } from './modules/navpanel/header/seguimiento/config-menu/bloques/bloques.component';
import { NotificacionesComponent } from './modules/navpanel/header/seguimiento/config-menu/notificaciones/notificaciones.component';
import { PaquetesComponent } from './modules/navpanel/header/seguimiento/config-menu/paquetes/paquetes.component';
import { SegTeamComponent } from './modules/navpanel/header/seguimiento/config-menu/seg-team/seg-team.component';
import { SetenciasComponent } from './modules/navpanel/header/seguimiento/config-menu/setencias/setencias.component';
import { SpecialPermissionComponent } from './modules/navpanel/header/seguimiento/config-menu/special-permission/special-permission.component';
import { TerminosComponent } from './modules/navpanel/header/seguimiento/config-menu/terminos/terminos.component';
import { TimeRangeComponent } from './modules/navpanel/header/seguimiento/config-menu/time-range/time-range.component';
import { OrganizationCompComponent } from './modules/navpanel/header/seguimiento/seguimiento-menu/organization-comp/organization-comp.component';

export const misRoutes: Routes = [
  {
    path: 'sitios-web',
    component: WebsiteComponent,
    data: { title: 'Sitios Web', icon: 'pi pi-pen-to-square' },
  },
  {
    path: 'sitios-compartidos',
    component: SitiosCompartidosComponent,
    data: { title: 'Sitios Compartidos', icon: 'pi pi-desktop' },
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    data: { title: 'Suscripción', icon: 'pi pi-envelope' },
  },
  {
    path: 'telus-grupal',
    component: TelusGrupalComponent,
    data: { title: 'Telus Grupal', icon: 'pi pi-chart-line' },
  }, // Agrega la nueva ruta
  {
    path: 'support',
    component: SupportComponent,
    data: { title: 'Acompañamiento', icon: 'pi pi-users' },
  },
  {
    path: 'diagnostico-seo',
    component: DiagnosticoSeoComponent,
    data: { title: 'Diagnóstico SEO', icon: 'pi pi-wrench' },
  },
  { path: 'sitios-web-compartidos', component: SitiosWebCompartidosComponent },
  {
    path: 'evaluacion-seo',
    component: EvaluacionSeoComponent,
    data: { title: 'Evaluación SEO', icon: 'pi pi-hammer' },
  }, // Agrega la nueva ruta
  {
    path: 'analisis-telus',
    component: AnalisisTelusComponent,
    data: { title: 'Análisis Telus', icon: 'pi pi-chart-line' },
  }, // Agrega la nueva ruta
  { path: '', redirectTo: '/sitios-web', pathMatch: 'full' },
];
// menus seguimiento
export const seguimiento: Routes = [
    //seguimiento
  { path: 'administrar/sitiosweb', component: SitesComponent },
  { path: 'administrar/valoraciones', component: VarValComponent },
  { path: 'administrar/comentario/listar', component: CommentComponent },
  { path: 'administrar/organizaciones/listar', component: OrganizationCompComponent },
  { path: 'administrar/webmaster/listar', component: WebmasterComponent },
  { path: 'administrar/sitiosweb/prueba/gratis', component: SitesEnpruebaComponent},
  { path: 'propiedad/listar/compartidas', component: SitesSendComponent },
  //configuracion                                       
  {path:'administrar/sentencias', component:SetenciasComponent},
  {path:'administrar/ayuda/listar', component:AyudaComponent},
  {path:'administrar/terminos/listar', component:TerminosComponent},
  {path:'administrar/comercial/listar', component:SegTeamComponent},
  {path:'notificaciones/listar', component:NotificacionesComponent},
  {path:'bloque/listar', component:BloquesComponent},
  {path:'rango/listar', component:TimeRangeComponent},
  {path:'paquete/listar', component:PaquetesComponent},
  {path:'asignar_paquetes/listar', component:SpecialPermissionComponent},
  //accseso
  { path: 'administrar/accesos', component: AccesosComponent },
];
export const routes: Routes = [...misRoutes, ...seguimiento];
