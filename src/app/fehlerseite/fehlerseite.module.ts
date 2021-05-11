import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FehlerseitePageRoutingModule } from './fehlerseite-routing.module';

import { FehlerseitePage } from './fehlerseite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FehlerseitePageRoutingModule
  ],
  declarations: [FehlerseitePage]
})
export class FehlerseitePageModule {}
