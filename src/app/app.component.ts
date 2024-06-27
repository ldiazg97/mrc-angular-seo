import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavpanelModule } from './modules/navpanel/navpanel.module';
import { MaincontentModule } from './modules/maincontent/maincontent.module';
import { NavService } from './Services/nav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavpanelModule,
    MaincontentModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mrc-angular-interface';
  constructor(public navService: NavService) {}
  
  toggleNav() {
    this.navService.toggleNav();
  }
}
