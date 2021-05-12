import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeinePaessePageRoutingModule } from './meine-paesse-routing.module';

import { MeinePaessePage } from './meine-paesse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeinePaessePageRoutingModule
  ],
  declarations: [MeinePaessePage]
})
export class MeinePaessePageModule {}
