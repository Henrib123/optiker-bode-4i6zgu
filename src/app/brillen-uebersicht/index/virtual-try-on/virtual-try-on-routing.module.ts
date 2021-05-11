import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualTryOnPage } from './virtual-try-on.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualTryOnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualTryOnPageRoutingModule {}
