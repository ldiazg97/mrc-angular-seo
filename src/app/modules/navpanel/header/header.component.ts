import { Component } from '@angular/core';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        SeguimientoComponent,
        ButtonModule,
        SplitButtonModule,
    ]
})
export class HeaderComponent {
    menuVisible = false;

    toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }

    login() {
        // Lógica de login aquí
        console.log('Login clicked');
    }

    logout() {
        // Lógica de logout aquí
        console.log('Logout clicked');
    }
}
