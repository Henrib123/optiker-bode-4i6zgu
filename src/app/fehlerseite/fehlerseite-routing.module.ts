import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FehlerseitePage } from './fehlerseite.page';

const routes: Routes = [
  {
    path: '',
    component: FehlerseitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FehlerseitePageRoutingModule {}
