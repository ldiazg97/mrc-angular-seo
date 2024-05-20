import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-sitios-web-compartidos',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatToolbarModule,
    TableModule,
    MatIconModule,
    ButtonModule, CommonModule,BreadcrumbModule,],
  templateUrl: './sitios-web-compartidos.component.html',
  styleUrl: './sitios-web-compartidos.component.scss'
})
export class SitiosWebCompartidosComponent {
  sitiosWebCompartidos = [
    { numeroSitioWeb: 1, sitioWeb: 'www.ejemplo.com', compartidoA: 'Juan', rolC: 'admin', fecha: '16/05/2024' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', compartidoA: 'Pedro', rolC: 'admin', fecha: '16/05/2024'  },
    // Puedes agregar más sitios web aquí
  ];
}
