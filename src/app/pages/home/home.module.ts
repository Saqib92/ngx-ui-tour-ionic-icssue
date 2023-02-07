import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TourIonPopoverModule } from 'ngx-ui-tour-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourIonPopoverModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
