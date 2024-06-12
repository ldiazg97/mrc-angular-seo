import { Component, OnInit } from '@angular/core';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { NavServiceService } from '../nav/nav-service.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        SeguimientoComponent,
        ButtonModule,
        SplitButtonModule,
        MenuModule, MenubarModule,
        CommonModule
    ]
})
export class HeaderComponent implements OnInit{
    menuVisible = false;
    seguimientoItems: MenuItem[] = [];
    configurarItems: MenuItem[] = [];
    auditoriaItems: MenuItem[] =[];

    //cerrar el sidebar
    constructor(private navservice:NavServiceService){}

    onButtonClick(){
        this.navservice.toggleSidebar();
    }
  
    ngOnInit() {
      this.seguimientoItems = [
        { label: 'Sitios Web', icon: 'pi pi-server' },
        { label: 'Sitios Web Compartidos', icon: 'pi pi-share-alt' },
        { label: 'Valoraciones de Variables', icon: 'pi pi-star-fill' },
        { label: 'Comentarios', icon: 'pi pi-comments' },
        { label: 'Webmasters', icon: 'pi pi-users' },
        { label: 'Sitios Web de Prueba', icon: 'pi pi-file-word' }
      ];
  
      this.configurarItems = [
        { label: 'Sentencias', icon: 'pi pi-book' },
        { label: 'Ayuda', icon: 'pi pi-question-circle' },
        { label: 'Terminos', icon: 'pi pi-file-edit' },
        { label: 'Equipo de Seguimiento', icon: 'pi pi-eye' },
        { label: 'Notificaciones', icon: 'pi pi-bell' },
        { label: 'Bloques', icon: 'pi pi-clone' },
        { label: 'Rango de Tiempo', icon: 'pi pi-hourglass' },
        { label: 'Paquetes', icon: 'pi pi-objects-column' },
        { label: 'Permisos Especiales', icon: 'pi pi-lock' }
      ];
  
      this.auditoriaItems = [
        { label: 'Accesos', icon: 'pi pi-users' },
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
}
