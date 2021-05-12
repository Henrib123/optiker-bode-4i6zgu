import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LadescreenPageRoutingModule } from './ladescreen-routing.module';

import { LadescreenPage } from './ladescreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LadescreenPageRoutingModule
  ],
  declarations: [LadescreenPage]
})
export class LadescreenPageModule {}
