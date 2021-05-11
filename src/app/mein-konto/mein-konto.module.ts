import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeinKontoPageRoutingModule } from './mein-konto-routing.module';

import { MeinKontoPage } from './mein-konto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeinKontoPageRoutingModule
  ],
  declarations: [MeinKontoPage]
})
export class MeinKontoPageModule {}
