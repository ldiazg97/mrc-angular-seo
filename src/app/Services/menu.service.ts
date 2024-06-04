// menu.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _showEvaluacionSEO = new BehaviorSubject<boolean>(false);
  showEvaluacionSEO$ = this._showEvaluacionSEO.asObservable();

  setShowEvaluacionSEO(show: boolean) {
    this._showEvaluacionSEO.next(show);
  }
}
