import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeineAuftraegePageRoutingModule } from './meine-auftraege-routing.module';

import { MeineAuftraegePage } from './meine-auftraege.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeineAuftraegePageRoutingModule
  ],
  declarations: [MeineAuftraegePage]
})
export class MeineAuftraegePageModule {}
