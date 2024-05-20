import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule,MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  public menuItems = routes.filter(route => route.path !== '').filter(route => route.path !== 'sitios-compartidos');

  constructor(){
}
  
  
}
