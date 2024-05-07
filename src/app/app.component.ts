import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavpanelModule } from './modules/navpanel/navpanel.module';
import { MaincontentModule } from './modules/maincontent/maincontent.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavpanelModule,
    MaincontentModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mrc-angular-interface';
}
