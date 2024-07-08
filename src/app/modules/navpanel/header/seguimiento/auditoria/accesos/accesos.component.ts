import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-accesos',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbModule,
    MatIconModule,
    MatToolbarModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './accesos.component.html',
  styleUrl: './accesos.component.scss',
})
export class AccesosComponent {
  @ViewChild('dt1') dt1!: Table;
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt1.filterGlobal(value, 'contains');
  }

  tableVisible1: boolean = true;

  acceso = [
    {
      Numero: '1',
      Usuario: 'juan',
      Acceso: '10-05-2023 14:30',
      IP: '192.168.1.100',
    },
    {
      Numero: '2',
      Usuario: 'maria',
      Acceso: '11-05-2023 09:15',
      IP: '192.168.1.101',
    },
    {
      Numero: '3',
      Usuario: 'ana',
      Acceso: '12-05-2023 16:45',
      IP: '192.168.1.102',
    },
    {
      Numero: '4',
      Usuario: 'carlos',
      Acceso: '13-05-2023 11:20',
      IP: '192.168.1.103',
    },
    {
      Numero: '5',
      Usuario: 'laura',
      Acceso: '14-05-2023 08:10',
      IP: '192.168.1.104',
    },
    {
      Numero: '6',
      Usuario: 'pedro',
      Acceso: '15-05-2023 19:30',
      IP: '192.168.1.105',
    },
    {
      Numero: '7',
      Usuario: 'isabel',
      Acceso: '16-05-2023 14:15',
      IP: '192.168.1.106',
    },
    {
      Numero: '8',
      Usuario: 'Jane',
      Acceso: '07-05-2023 08:00',
      IP: '192.168.1.2',
    },
    {
      Numero: '9',
      Usuario: 'Bob',
      Acceso: '08-05-2023 09:00',
      IP: '192.168.1.3',
    },
    {
      Numero: '10',
      Usuario: 'Alice',
      Acceso: '09-05-2023 10:00',
      IP: '192.168.1.4',
    },
    {
      Numero: '11',
      Usuario: 'Charlie',
      Acceso: '10-05-2023 11:00',
      IP: '192.168.1.5',
    },
    {
      Numero: '12',
      Usuario: 'Diana',
      Acceso: '11-05-2023 12:00',
      IP: '192.168.1.6',
    },
    {
      Numero: '13',
      Usuario: 'Ethan',
      Acceso: '12-05-2023 13:00',
      IP: '192.168.1.7',
    },
    {
      Numero: '14',
      Usuario: 'Fiona',
      Acceso: '13-05-2023 14:00',
      IP: '192.168.1.8',
    },
    {
      Numero: '15',
      Usuario: 'George',
      Acceso: '14-05-2023 15:00',
      IP: '192.168.1.9',
    },
    {
      Numero: '16',
      Usuario: 'Hannah',
      Acceso: '15-05-2023 16:00',
      IP: '192.168.1.10',
    },
  ];
}
