import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private navContracted = new BehaviorSubject<boolean>(false);
  navContracted$ = this.navContracted.asObservable();

  toggleNav() {
    this.navContracted.next(!this.navContracted.value);
  }
}
