import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showEvaluacionSEO$ = new BehaviorSubject<boolean>(false);
  showEvaluacionSEO = this.showEvaluacionSEO$.asObservable();

  private showAnalisisTelus$ = new BehaviorSubject<boolean>(false);
  showAnalisisTelus = this.showAnalisisTelus$.asObservable();

  setShowEvaluacionSEO(show: boolean) {
    this.showEvaluacionSEO$.next(show);
  }

  setShowAnalisisTelus(show: boolean) {
    this.showAnalisisTelus$.next(show);
  }
}
