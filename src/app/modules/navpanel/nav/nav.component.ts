// nav.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../Services/menu.service';
import { routes } from '../../../app.routes';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports:[CommonModule,MatIcon,RouterModule]
})
export class NavComponent implements OnInit {
  public menuItems = routes.filter(route => route.path !== '').filter(route => route.path !== 'sitios-compartidos').filter(route => route.path !== 'evaluacion-seo');
  showEvaluacionSEO: boolean = false;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.menuService.showEvaluacionSEO$.subscribe(show => {
      this.showEvaluacionSEO = show;
    });

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects !== '/evaluacion-seo') {
        this.menuService.setShowEvaluacionSEO(false);
      }
    });
  }
}
