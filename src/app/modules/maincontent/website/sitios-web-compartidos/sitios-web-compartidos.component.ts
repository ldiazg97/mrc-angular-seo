import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-sitios-web-compartidos',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatToolbarModule,
    TableModule,
    MatIconModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule, CommonModule,BreadcrumbModule,],
  templateUrl: './sitios-web-compartidos.component.html',
  styleUrl: './sitios-web-compartidos.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SitiosWebCompartidosComponent {
  @ViewChild('dt1') dt1!: Table;
  sitiosWebCompartidos = [
    { numeroSitioWeb: 1, sitioWeb: 'www.ejemplo.com', compartidoA: 'Juan', rolC: 'admin', fecha: '16/05/2024' },
    { numeroSitioWeb: 2, sitioWeb: 'www.otroejemplo.com', compartidoA: 'Pedro', rolC: 'admin', fecha: '16/05/2024'  },
    // Puedes agregar más sitios web aquí
  ];
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt1.filterGlobal(value, 'contains');
  }
}
