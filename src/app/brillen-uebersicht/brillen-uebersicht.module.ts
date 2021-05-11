import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrillenUebersichtPageRoutingModule } from './brillen-uebersicht-routing.module';

import { BrillenUebersichtPage } from './brillen-uebersicht.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrillenUebersichtPageRoutingModule
  ],
  declarations: [BrillenUebersichtPage]
})
export class BrillenUebersichtPageModule {}
