import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Table, TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router, NavigationEnd, RouterModule, ActivatedRouteSnapshot, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { LazyLoadEvent } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PaginatorModule } from 'primeng/paginator';




@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatToolbarModule,
    TableModule,
    MatIconModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule, 
    CommonModule,
    BreadcrumbModule,
    RouterOutlet,
    PaginatorModule
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SubscriptionComponent {

  totalRecords: number = 0;  // Total de registros
  rows: number = 5;  // Filas por página
  first: number = 0;  // Primer registro en la página actual
  first1 = 0;
  rows1 = 10;
  first2 = 0;
  rows2 = 10;
  first3 = 0;
  rows3 = 10;
  first4 = 0;
  rows4 = 10;
  first5 = 0;
  rows5 = 10;
  first6 = 0;
  rows6 = 10;
  @ViewChild('dt2') dt2!: Table;
  @ViewChild('dt3') dt3!: Table;
  @ViewChild('dt4') dt4!: Table;
  @ViewChild('dt5') dt5!: Table;
  @ViewChild('dt6') dt6!: Table;
  @ViewChild('dt7') dt7!: Table;
  @ViewChild('dt8') dt8!: Table;

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt2.filterGlobal(value, 'contains');
  }
  onInputChange1(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt3.filterGlobal(value, 'contains');
  }
  onInputChange2(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt4.filterGlobal(value, 'contains');
  }
  onInputChange3(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt5.filterGlobal(value, 'contains');
  }
  onInputChange4(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt6.filterGlobal(value, 'contains');
  }
  onInputChange5(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt7.filterGlobal(value, 'contains');
  }
  onInputChange6(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dt8.filterGlobal(value, 'contains');
  }

pageChange(event: LazyLoadEvent) {
  this.first = event.first ?? this.first;
  this.rows = event.rows ?? this.rows;
}
isLastPage(): boolean {
  return this.subscription ? this.first === this.subscription.length - this.rows : true;
}

isFirstPage(): boolean {
  return this.subscription ? this.first === 0 : true;
}


pageChange1(event:any) {
this.first1 = event.first1 ?? this.first1;
this.rows1 = event.rows1 ?? this.rows1;
}
isLastPage1(): boolean {
return this.subscription ? this.first1 === this.subscription.length - this.rows1 : true;
}

isFirstPage1(): boolean {
return this.subscription ? this.first1 === 0 : true;
}

pageChange2(event:any) {
  this.first2 = event.first2 ?? this.first2;
  this.rows2 = event.rows2 ?? this.rows2;
  }
  isLastPage2(): boolean {
  return this.subscription ? this.first2 === this.subscription.length - this.rows2 : true;
  }
  
  isFirstPage2(): boolean {
  return this.subscription ? this.first2 === 0 : true;
  }
  pageChange3(event:any) {
    this.first3 = event.first3 ?? this.first3;
    this.rows3 = event.rows3 ?? this.rows3;
    }
    isLastPage3(): boolean {
    return this.subscription ? this.first3 === this.subscription.length - this.rows3 : true;
    }
    
    isFirstPage3(): boolean {
    return this.subscription ? this.first3 === 0 : true;
    }
    pageChange4(event:any) {
      this.first4 = event.first4 ?? this.first4;
      this.rows4 = event.rows4 ?? this.rows4;
      }
      isLastPage4(): boolean {
      return this.subscription ? this.first4 === this.subscription.length - this.rows4 : true;
      }
      
      isFirstPage4(): boolean {
      return this.subscription ? this.first4 === 0 : true;
      }

      pageChange5(event:any) {
        this.first5 = event.first5 ?? this.first5;
        this.rows5 = event.rows5 ?? this.rows5;
        }
        isLastPage5(): boolean {
        return this.subscription ? this.first5 === this.subscription.length - this.rows5 : true;
        }
        
        isFirstPage5(): boolean {
        return this.subscription ? this.first5 === 0 : true;
        }
        pageChange6(event:any) {
          this.first6 = event.first6 ?? this.first6;
          this.rows6 = event.rows6 ?? this.rows6;
          }
          isLastPage6(): boolean {
          return this.subscription ? this.first6 === this.subscription.length - this.rows6 : true;
          }
          
          isFirstPage6(): boolean {
          return this.subscription ? this.first6 === 0 : true;
          }

  subscription= [
    {
      "numero": 1,
      "nombre_del_usuario": "Juan Pérez",
      "organismo": "Ministerio de Educación",
      "correo": "juan.perez@example.com",
      "sitios_web": [
        "https://www.example.edu",
        "https://www.anotherexample.org"
      ],
      "servicios": ["Servicio A", "Servicio B"],
      "tiempo_restante": "2 meses",
      "cantidad_sitios_web": 2,
      "paquete": "Paquete Premium",
      "fecha_de_solicitud": "2024-06-04",
      "tiempo_solicitado": "3 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "deshabilitado"
    },
    {
      "numero": 2,
      "nombre_del_usuario": "Ana García",
      "organismo": "Universidad Nacional",
      "correo": "ana.garcia@unacional.edu",
      "sitios_web": ["https://www.unacional.edu"],
      "servicios": ["Servicio E", "Servicio F"],
      "cantidad_sitios_web": 1,
      "paquete": "Paquete Estándar",
      "tiempo_restante": "2 meses",
      "fecha_de_solicitud": "2024-06-08",
      "tiempo_solicitado": "6 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "deshabilitado"
    },
    {
      "numero": 3,
      "nombre_del_usuario": "Carlos López",
      "organismo": "Instituto Tecnológico",
      "tiempo_restante": "2 meses",
      "correo": "carlos.lopez@it.edu",
      "sitios_web": ["https://www.it.edu"],
      "cantidad_sitios_web": 1,
      "servicios": ["Servicio G", "Servicio H"],
      "paquete": "Paquete Básico",
      "fecha_de_solicitud": "2024-06-11",
      "tiempo_solicitado": "1 año",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "aprobada"
    },
    {
      "numero": 4,
      "nombre_del_usuario": "Luis Martínez",
      "organismo": "Centro de Investigación",
      "tiempo_restante": "2 meses",
      "correo": "luis.martinez@ciresearch.org",
      "sitios_web": ["https://www.ciresearch.org"],
      "servicios": ["Servicio I", "Servicio J"],
      "paquete": "Paquete Avanzado",
      "cantidad_sitios_web": 1,
      "fecha_de_solicitud": "2024-06-14",
      "tiempo_solicitado": "2 años",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": "2024-06-17",
      "estado": "deshabilitado"
    },
    {
      "numero": 5,
      "nombre_del_usuario": "Sofía Rodríguez",
      "organismo": "Escuela de Artes",
      "tiempo_restante": "2 meses",
      "correo": "sofia.rodriguez@artschool.edu",
      "cantidad_sitios_web": 1,
      "sitios_web": ["https://www.artsschool.edu"],
      "servicios": ["Servicio K", "Servicio L"],
      "paquete": "Paquete Especial",
      "fecha_de_solicitud": "2024-06-17",
      "tiempo_solicitado": "4 meses",
      "fecha_de_comienzo": "2024-08-17",
      "fecha_de_deshabilitacion": false,
      "estado": "aprobada"
    },
    {
      "numero": 6,
      "nombre_del_usuario": "Gabriel Moreno",
      "organismo": "Hospital Universitario",
      "cantidad_sitios_web": 1,
      "tiempo_restante": "2 meses",
      "correo": "gabriel.moreno@hospitaluni.edu",
      "sitios_web": ["https://www.hospitaluni.edu"],
      "servicios": ["Servicio W", "Servicio X"],
      "paquete": "Paquete Titanium",
      "fecha_de_solicitud": "2024-07-06",
      "tiempo_solicitado": "12 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "en proceso"
    },
    {
      "numero": 7,
      "nombre_del_usuario": "Beatriz Hernández",
      "organismo": "Escuela de Negocios",
      "tiempo_restante": "2 meses",
      "cantidad_sitios_web": 1,
      "correo": "beatriz.hernandez@businessschool.edu",
      "sitios_web": ["https://www.businessschool.edu"],
      "servicios": ["Servicio Y", "Servicio Z"],
      "paquete": "Paquete Cobalto",
      "fecha_de_solicitud": "2024-07-09",
      "tiempo_solicitado": "6 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "en negocios"
    },
    {
      "numero": 8,
      "nombre_del_usuario": "Fernando Ramírez",
      "organismo": "Instituto de Cultura",
      "cantidad_sitios_web": 1,
      "tiempo_restante": "2 meses",
      "correo": "fernando.ramirez@cultureinstitute.edu",
      "sitios_web": ["https://www.cultureinstitute.edu"],
      "servicios": ["Servicio AA", "Servicio BB"],
      "paquete": "Paquete Neodymium",
      "fecha_de_solicitud": "2024-07-12",
      "tiempo_solicitado": "4 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "cerrada"
    },
    {
      "numero": 9,
      "cantidad_sitios_web": 1,
      "nombre_del_usuario": "María Ruiz",
      "organismo": "Centro de Formación Profesional",
      "correo": "maria.ruiz@vocationalcenter.edu",
      "tiempo_restante": "2 meses",
      "sitios_web": ["https://www.vocationalcenter.edu"],
      "servicios": ["Servicio CC", "Servicio DD"],
      "paquete": "Paquete Europium",
      "fecha_de_solicitud": "2024-07-15",
      "tiempo_solicitado": "8 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "en proceso"
    },
    {
      "numero": 10,
      "cantidad_sitios_web": 1,
      "nombre_del_usuario": "Alejandro García",
      "organismo": "Fundación de Bienestar",
      "tiempo_restante": "2 meses",
      "correo": "alejandro.garcia@welfarefoundation.org",
      "sitios_web": ["https://www.welfarefoundation.org"],
      "servicios": ["Servicio EE", "Servicio FF"],
      "paquete": "Paquete Terbio",
      "fecha_de_solicitud": "2024-07-18",
      "tiempo_solicitado": "10 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "en negocios"
    },
    {
      "numero": 11,
      "nombre_del_usuario": "Sara López",
      "cantidad_sitios_web": 1,
      "organismo": "Instituto de Tecnologías de la Información",
      "correo": "sara.lopez@iti.edu",
      "sitios_web": ["https://www.iti.edu"],
      "servicios": ["Servicio GG", "Servicio HH"],
      "paquete": "Paquete Gadolinio",
      "fecha_de_solicitud": "2024-07-21",
      "tiempo_solicitado": "5 meses",
      "tiempo_restante": "2 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "cerrada"
    },
    {
      "numero": 12,
      "nombre_del_usuario": "Carlos Muñoz",
      "organismo": "Centro de Investigaciones Ambientales",
      "cantidad_sitios_web": 1,
      "correo": "carlos.munoz@environmentalresearchcenter.edu",
      "sitios_web": ["https://www.environmentalresearchcenter.edu"],
      "servicios": ["Servicio II", "Servicio JJ"],
      "paquete": "Paquete Erbio",
      "tiempo_restante": "2 meses",
      "fecha_de_solicitud": "2024-07-24",
      "tiempo_solicitado": "7 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "en proceso"
    },
    {
      "numero": 13,
      "cantidad_sitios_web": 1,
      "nombre_del_usuario": "Patricia Rodríguez",
      "organismo": "Escuela de Diseño",
      "correo": "patricia.rodriguez@designschool.edu",
      "tiempo_restante": "2 meses",
      "sitios_web": ["https://www.designschool.edu"],
      "servicios": ["Servicio KK", "Servicio LL"],
      "paquete": "Paquete Holmio",
      "fecha_de_solicitud": "2024-07-27",
      "tiempo_solicitado": "9 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "en negocios"
    },
    {
      "numero": 14,
      "cantidad_sitios_web": 1,
      "nombre_del_usuario": "Jorge Fernández",
      "organismo": "Instituto de Economía",
      "correo": "jorge.fernandez@economyinstitute.edu",
      "sitios_web": ["https://www.economyinstitute.edu"],
      "servicios": ["Servicio MM", "Servicio NN"],
      "paquete": "Paquete Samario",
      "tiempo_restante": "2 meses",
      "fecha_de_solicitud": "2024-07-30",
      "tiempo_solicitado": "11 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "cerrada"
    },
    {
      "numero": 15,
      "nombre_del_usuario": "Pedro González",
      "cantidad_sitios_web": 1,
      "organismo": "Facultad de Ciencias",
      "correo": "pedro.gonzalez@sciencesfaculty.edu",
      "sitios_web": ["https://www.sciencesfaculty.edu"],
      "servicios": ["Servicio M", "Servicio N"],
      "paquete": "Paquete Gold",
      "tiempo_restante": "2 meses",
      "fecha_de_solicitud": "2024-06-20",
      "tiempo_solicitado": "5 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "deshabilitado"
    },
    {
      "numero": 16,
      "nombre_del_usuario": "Laura Pérez",
      "organismo": "Colegio de Profesores",
      "cantidad_sitios_web": 1,
      "correo": "laura.perez@professorscollege.edu",
      "sitios_web": ["https://www.professorscollege.edu"],
      "tiempo_restante": "2 meses",
      "servicios": ["Servicio O", "Servicio P"],
      "paquete": "Paquete Silver",
      "fecha_de_solicitud": "2024-06-23",
      "tiempo_solicitado": "7 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": false,
      "estado": "aprobada"
    },
    {
      "numero": 17,
      "nombre_del_usuario": "Manuel Torres",
      "organismo": "Instituto de Salud",
      "cantidad_sitios_web": 1,
      "correo": "manuel.torres@healthinstitute.edu",
      "sitios_web": ["https://www.healthinstitute.edu"],
      "servicios": ["Servicio Q", "Servicio R"],
      "paquete": "Paquete Platinum",
      "fecha_de_solicitud": "2024-06-26",
      "tiempo_solicitado": "8 meses",
      "fecha_de_comienzo": "2024-10-17",
      "tiempo_restante": "2 meses",
      "fecha_de_deshabilitacion": "2024-8-07",
      "estado": "deshabilitado"
    },
    {
      "numero": 18,
      "nombre_del_usuario": "Isabel Fernández",
      "organismo": "Departamento de Recursos Humanos",
      "correo": "isabel.fernandez@hrdepartment.edu",
      "cantidad_sitios_web": 1,
      "sitios_web": ["https://www.hrdepartment.edu"],
      "servicios": ["Servicio S", "Servicio T"],
      "paquete": "Paquete Diamond",
      "fecha_de_solicitud": "2024-06-29",
      "tiempo_restante": "2 meses",
      "tiempo_solicitado": "9 meses",
      "fecha_de_comienzo": "2024-8-07",
      "fecha_de_deshabilitacion": false,
      "estado": "aprobada"
    },
    {
      "numero": 19,
      "nombre_del_usuario": "Carmen López",
      "organismo": "Fundación de Investigación",
      "correo": "carmen.lopez@researchfoundation.org",
      "cantidad_sitios_web": 1,
      "sitios_web": ["https://www.researchfoundation.org"],
      "servicios": ["Servicio U", "Servicio V"],
      "paquete": "Paquete Elite",
      "fecha_de_solicitud": "2024-07-03",
      "tiempo_solicitado": "10 meses",
      "tiempo_restante": "2 meses",
      "fecha_de_comienzo": "2024-10-17",
      "fecha_de_deshabilitacion": "2024-8-07",
      "estado": "deshabilitado"
    }
  ]
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
