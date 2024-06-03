import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router, NavigationEnd, RouterModule, ActivatedRouteSnapshot, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatToolbarModule,
    TableModule,
    MatIconModule,
    ButtonModule, CommonModule,BreadcrumbModule,RouterOutlet
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
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
  support = [
    { numero: 1, entidad: 'Datazucar', correo: 'datazucar@algo.com', modalidad: 'Presencial', lugar: 'Institucion del Solicitante', fechaSol: '15/06/2024', fechaReal: '30/08/2024', cantPer: '7', precio: '$9630' },
    { numero: 2, entidad: 'Aduana', correo: 'aduana@gob.cu', modalidad: 'Presencial', lugar: 'Institucion del Solicitante', fechaSol: '15/06/2024', fechaReal: '30/08/2024', cantPer: '7', precio: '$9630' },
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
