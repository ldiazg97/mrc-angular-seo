import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support/support.component';
import { WebsiteComponent } from './website/website.component';
import { SubscriptionComponent } from './subscription/subscription.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupportComponent,
    WebsiteComponent,
    SubscriptionComponent
  ],
  exports:[
    SupportComponent,
    WebsiteComponent,
    SubscriptionComponent
  ]
})
export class MaincontentModule { }
