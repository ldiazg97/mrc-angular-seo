import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavServiceService {
  private isCollapsed = new BehaviorSubject<boolean>(false);

  // Observable para que otros componentes puedan suscribirse
  public isCollapsed$ = this.isCollapsed.asObservable();

  toggleSidebar() {
    this.isCollapsed.next(!this.isCollapsed.value);
  }

  constructor() {}
}
