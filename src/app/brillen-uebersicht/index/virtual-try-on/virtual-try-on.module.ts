import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualTryOnPageRoutingModule } from './virtual-try-on-routing.module';

import { VirtualTryOnPage } from './virtual-try-on.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualTryOnPageRoutingModule
  ],
  declarations: [VirtualTryOnPage]
})
export class VirtualTryOnPageModule {}
