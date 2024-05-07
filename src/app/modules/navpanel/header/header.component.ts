import { Component } from '@angular/core';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SeguimientoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
