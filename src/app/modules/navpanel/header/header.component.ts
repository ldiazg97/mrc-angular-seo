import { Component, OnInit } from '@angular/core';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
// import { NavServiceService } from '../nav/nav-service.service';
import { NavService } from '../../../Services/nav.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    SeguimientoComponent,
    ButtonModule,
    SplitButtonModule,
    MenuModule,
    MenubarModule,
    CommonModule,
    RouterLink,
    RouterModule,
  ],
})
export class HeaderComponent implements OnInit {
  menuVisible = false;
  seguimientoItems: MenuItem[] = [];
  configurarItems: MenuItem[] = [];
  auditoriaItems: MenuItem[] = [];

  //cerrar el sidebar
  constructor(private navService: NavService) {}

  onButtonClick() {
    console.log('El botón fue clickeado');

    // this.navservice.toggleSidebar();
  }

  ngOnInit() {
    this.seguimientoItems = [
      {
        label: 'Sitios Web',
        icon: 'pi pi-server',
        routerLink: '/administrar/sitiosweb',
      },
      {
        label: 'Sitios Web Compartidos',
        icon: 'pi pi-share-alt',
        routerLink: '/propiedad/listar/compartidas',
      },
      {
        label: 'Organizaciones Compartidas',
        icon: 'pi pi-eject',
        routerLink: '/administrar/organizaciones/listar',
      },
      {
        label: 'Valoraciones de Variables',
        icon: 'pi pi-star-fill',
        routerLink: '/administrar/valoraciones',
      },
      {
        label: 'Comentarios',
        icon: 'pi pi-comments',
        routerLink: '/administrar/comentario/listar',
      },
      {
        label: 'Webmasters',
        icon: 'pi pi-users',
        routerLink: '/administrar/webmaster/listar',
      },
      {
        label: 'Sitios Web de Prueba',
        icon: 'pi pi-file-word',
        routerLink: '/administrar/sitiosweb/prueba/gratis',
      },
    ];

    this.configurarItems = [
      {
        label: 'Sentencias',
        icon: 'pi pi-book',
        routerLink: '/administrar/sentencias',
      },
      {
        label: 'Ayuda',
        icon: 'pi pi-question-circle',
        routerLink: '/administrar/ayuda/listar',
      },
      {
        label: 'Terminos',
        icon: 'pi pi-file-edit',
        routerLink: '/administrar/terminos/listar',
      },
      {
        label: 'Equipo de Seguimiento',
        icon: 'pi pi-eye',
        routerLink: '/administrar/comercial/listar',
      },
      {
        label: 'Notificaciones',
        icon: 'pi pi-bell',
        routerLink: '/notificaciones/listar',
      },
      { label: 'Bloques', icon: 'pi pi-clone', routerLink: '/bloque/listar' },
      {
        label: 'Rango de Tiempo',
        icon: 'pi pi-hourglass',
        routerLink: '/rango/listar',
      },
      {
        label: 'Paquetes',
        icon: 'pi pi-objects-column',
        routerLink: '/paquete/listar',
      },
      {
        label: 'Permisos Especiales',
        icon: 'pi pi-lock',
        routerLink: '/asignar_paquetes/listar',
      },
    ];

    this.auditoriaItems = [
      {
        label: 'Accesos',
        icon: 'pi pi-users',
        routerLink: '/administrar/accesos',
      },
    ];
  }
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  login() {
    // Lógica de login aquí
    console.log('Login clicked');
  }

  logout() {
    // Lógica de logout aquí
    console.log('Logout clicked');
  }
  seguimientoClick() {
    // Lógica para el clic en el botón de seguimiento
    console.log('Seguimiento button clicked');
  }

  configurarClick() {
    // Lógica para el clic en el botón de configuración
    console.log('Configurar button clicked');
  }

  auditoriaClick() {
    // Lógica para el clic en el botón de auditoría
    console.log('Auditoría button clicked');
  }
  toggleNav() {
    this.navService.toggleNav();
  }
}
