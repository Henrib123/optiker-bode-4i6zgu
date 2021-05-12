import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeinePaessePage } from './meine-paesse.page';

const routes: Routes = [
  {
    path: '',
    component: MeinePaessePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeinePaessePageRoutingModule {}
