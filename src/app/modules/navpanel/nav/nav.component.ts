import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../../../Services/menu.service';
import { routes } from '../../../app.routes';
import { Router, NavigationEnd, Event, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { NavServiceService } from './nav-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CommonModule, MatIcon, RouterModule],
})
export class NavComponent implements OnInit, OnDestroy {

  // inicializa isCollapsed
  
  isCollapsed: boolean;
  private subscription: Subscription;
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public menuItems = routes
    .filter((route) => route.path !== '')
    .filter((route) => route.path !== 'sitios-web-compartidos')
    .filter((route) => route.path !== 'evaluacion-seo')
    .filter((route) => route.path !== 'analisis-telus');
  showEvaluacionSEO: boolean = false;
  showAnalisisTelus: boolean = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private navservice: NavServiceService
  ) {
    this.isCollapsed = false;
    this.subscription = this.navservice.isCollapsed$.subscribe(
      (isCollapsed)=>{
        this.isCollapsed=isCollapsed;
      }
    );
  }

  ngOnInit() {
    //cerrar sidevar
    this.subscription = this.navservice.isCollapsed$.subscribe(
      (isCollapsed) => (this.isCollapsed = isCollapsed)
    );


    this.menuService.showEvaluacionSEO.subscribe((show) => {
      this.showEvaluacionSEO = show;
    });
    this.menuService.showAnalisisTelus.subscribe((show) => {
      this.showAnalisisTelus = show;
    });

    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        if (
          event.urlAfterRedirects !== '/evaluacion-seo' &&
          event.urlAfterRedirects !== '/analisis-telus'
        ) {
          this.menuService.setShowEvaluacionSEO(false);
          this.menuService.setShowAnalisisTelus(false);
        }
      });
  }
}
