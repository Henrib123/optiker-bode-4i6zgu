import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeineFavoritenPageRoutingModule } from './meine-favoriten-routing.module';

import { MeineFavoritenPage } from './meine-favoriten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeineFavoritenPageRoutingModule
  ],
  declarations: [MeineFavoritenPage]
})
export class MeineFavoritenPageModule {}
