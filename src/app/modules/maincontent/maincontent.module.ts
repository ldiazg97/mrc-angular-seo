import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support/support.component';
import { WebsiteComponent } from './website/website.component';
import { SubscriptionComponent } from './subscription/subscription.component';

import { MatTableModule } from '@angular/material/table';

import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupportComponent,
    WebsiteComponent,
    SubscriptionComponent,
    MatTableModule,
    MatToolbarModule

  ],
  exports: [
    SupportComponent,
    WebsiteComponent,
    SubscriptionComponent
  ]
})
export class MaincontentModule { }
