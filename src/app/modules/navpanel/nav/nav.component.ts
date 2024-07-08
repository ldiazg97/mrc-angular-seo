import { Component, OnDestroy, OnInit,Renderer2, ElementRef } from '@angular/core';
import { MenuService } from '../../../Services/menu.service';
import { misRoutes, routes } from '../../../app.routes';
import { Router, NavigationEnd, Event, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
// import { NavServiceService } from './nav-service.service';
import { Observable, Subscription } from 'rxjs';
import { NavService } from '../../../Services/nav.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CommonModule, MatIcon, RouterModule],
})
export class NavComponent implements OnInit {

  // inicializa isCollapsed
  isNavContracted$: Observable<boolean>;
  isNavContracted: boolean = false;
  logoSrc: string = '../../../../assets/Logos/SEOWEBMAS.svg';

  public menuItems = misRoutes
    .filter((route) => route.path !== '')
    .filter((route) => route.path !== 'sitios-web-compartidos')
    .filter((route) => route.path !== 'evaluacion-seo')
    .filter((route) => route.path !== 'analisis-telus');
  showEvaluacionSEO: boolean = false;
  showAnalisisTelus: boolean = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private navService: NavService,
    private renderer: Renderer2, 
    private el: ElementRef
  ) {this.isNavContracted$ = this.navService.navContracted$;
  }

  ngOnInit() {
    this.isNavContracted$.subscribe(contracted => {
      this.isNavContracted = contracted;
      this.logoSrc = contracted ? '../../../../assets/Logos/SEO WEB MASwhite-02.svg' : '../../../../assets/Logos/SEOWEBMAS.svg';
      if (contracted) {
        this.renderer.addClass(this.el.nativeElement, 'contract');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'contract');
      }
    });


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
  toggleNav() {
    this.navService.toggleNav();
  }
}
