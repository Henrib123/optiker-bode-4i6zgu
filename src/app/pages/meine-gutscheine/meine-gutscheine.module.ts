import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeineGutscheinePageRoutingModule } from './meine-gutscheine-routing.module';

import { MeineGutscheinePage } from './meine-gutscheine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeineGutscheinePageRoutingModule
  ],
  declarations: [MeineGutscheinePage]
})
export class MeineGutscheinePageModule {}
