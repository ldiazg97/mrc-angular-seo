import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ActivatedRoute,Router, NavigationEnd, RouterModule, ActivatedRouteSnapshot, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatToolbarModule,
    TableModule,
    MatIconModule,
    ButtonModule, CommonModule,BreadcrumbModule,RouterOutlet],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent{
  tableVisible: boolean = true; // Inicialmente visible

  toggleTableVisibility() {
    this.tableVisible = !this.tableVisible; // Alternar visibilidad
    console.log('Table visibility toggled:', this.tableVisible); 
  }

  tableVisible1: boolean = true; // Inicialmente visible

  toggleTableVisibility1() {
    this.tableVisible1 = !this.tableVisible1; // Alternar visibilidad
    console.log('Table visibility toggled:', this.tableVisible1); 
  }
  sitiosWeb = [
    { numeroSitioWeb: 1, sitioWeb: 'www.ejemplo.com', estadoSuscripcion: 'Activa', paquete: 'Premium' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', estadoSuscripcion: 'Inactiva', paquete: 'Básico' },
    // Puedes agregar más sitios web aquí
  ];
  items: any[] = [];
  home: any = { icon: 'pi pi-home', routerLink: '/' };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('Constructor called');
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
        this.updateBreadcrumb();
    });
}

updateBreadcrumb() {
    const root = this.router.routerState.snapshot.root;
    this.items = [];
    
    this.addBreadcrumb(root);
    
    console.log('Current Route:', this.router.url);
    console.log('Breadcrumb Items:', this.items);
}

private addBreadcrumb(route: ActivatedRouteSnapshot) {
    const routeData = route.data;
    const url = route.url.map(segment => segment.path).join('/');
    
    console.log('Route Data:', routeData);
    
    const routeTitle = routeData['title']; // Acceder al título utilizando la propiedad 'title' en 'data'
    
    if (routeTitle) {
        this.items.push({ label: routeTitle, routerLink: '/' + url });
    }
    
    const children = route.children;
    if (children.length) {
        children.forEach(child => this.addBreadcrumb(child));
    }
}


}
