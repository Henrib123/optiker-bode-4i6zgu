import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KontaktlinsenPageRoutingModule } from './kontaktlinsen-routing.module';

import { KontaktlinsenPage } from './kontaktlinsen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KontaktlinsenPageRoutingModule
  ],
  declarations: [KontaktlinsenPage]
})
export class KontaktlinsenPageModule {}
