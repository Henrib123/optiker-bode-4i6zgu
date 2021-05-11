import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeineGutscheinePage } from './meine-gutscheine.page';

const routes: Routes = [
  {
    path: '',
    component: MeineGutscheinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeineGutscheinePageRoutingModule {}
