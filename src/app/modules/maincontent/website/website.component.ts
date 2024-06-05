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
import { MenuService } from '../../../Services/menu.service';
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
    {
      "numeroSitioWeb": 1,
      "sitioWeb": "http://sitio1.com",
      "estadoSuscripcion": "Aprobada",
      "paquete": "Basico"
    },
    {
      "numeroSitioWeb": 2,
      "sitioWeb": "http://sitio2.com",
      "estadoSuscripcion": "Rechazada",
      "paquete": "Avanzado"
    },
    {
      "numeroSitioWeb": 3,
      "sitioWeb": "http://sitio3.com",
      "estadoSuscripcion": "En proceso",
      "paquete": "Temporal"
    },
    {
      "numeroSitioWeb": 4,
      "sitioWeb": "http://sitio4.com",
      "estadoSuscripcion": "Cerrada",
      "paquete": "Basico"
    },
    {
      "numeroSitioWeb": 5,
      "sitioWeb": "http://sitio5.com",
      "estadoSuscripcion": "Deshabilitada",
      "paquete": "Avanzado"
    },
    {
      "numeroSitioWeb": 6,
      "sitioWeb": "http://sitio6.com",
      "estadoSuscripcion": "Aprobada",
      "paquete": "Temporal"
    },
    {
      "numeroSitioWeb": 7,
      "sitioWeb": "http://sitio7.com",
      "estadoSuscripcion": "Rechazada",
      "paquete": "Basico"
    },
    {
      "numeroSitioWeb": 8,
      "sitioWeb": "http://sitio8.com",
      "estadoSuscripcion": "En proceso",
      "paquete": "Avanzado"
    },
    {"numeroSitioWeb": 9,
      "sitioWeb": "http://sitio9.com",
      "estadoSuscripcion": "Cerrada",
      "paquete": "Temporal"
    },
    { "numeroSitioWeb": 10,
      "sitioWeb": "http://sitio10.com",
      "estadoSuscripcion": "Deshabilitada",
      "paquete": "Basico"
    },
    {
      "numeroSitioWeb": 11,
      "sitioWeb": "http://sitio11.com",
      "estadoSuscripcion": "Aprobada",
      "paquete": "Avanzado"
    },
    {
      "numeroSitioWeb": 12,
      "sitioWeb": "http://sitio12.com",
      "estadoSuscripcion": "Rechazada",
      "paquete": "Temporal"
    }
  ]
  items: any[] = [];
  home: any = { icon: 'pi pi-home', routerLink: '/' };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private menuService:MenuService) {
    console.log('Constructor called');
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
        this.updateBreadcrumb();
    });

}

// website.component.ts
navigateToEvaluation(sitioWeb: string) {
  this.menuService.setShowEvaluacionSEO(true);
  this.menuService.setShowAnalisisTelus(true);
  this.router.navigate(['/evaluacion-seo']);
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
