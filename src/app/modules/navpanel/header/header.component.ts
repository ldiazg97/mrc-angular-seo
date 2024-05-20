import { Component } from '@angular/core';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [
        SeguimientoComponent,

    ]
})
export class HeaderComponent {

}
