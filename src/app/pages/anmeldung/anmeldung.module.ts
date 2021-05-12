import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnmeldungPageRoutingModule } from './anmeldung-routing.module';

import { AnmeldungPage } from './anmeldung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnmeldungPageRoutingModule
  ],
  declarations: [AnmeldungPage]
})
export class AnmeldungPageModule {}
