import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    NavComponent,
  ],
  exports:[
    HeaderComponent,
    NavComponent
  ]
})
export class NavpanelModule { }
