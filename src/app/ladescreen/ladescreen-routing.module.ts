import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LadescreenPage } from './ladescreen.page';

const routes: Routes = [
  {
    path: '',
    component: LadescreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LadescreenPageRoutingModule {}
