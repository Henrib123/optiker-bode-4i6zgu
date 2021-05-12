import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnmeldungPage } from './anmeldung.page';

const routes: Routes = [
  {
    path: '',
    component: AnmeldungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnmeldungPageRoutingModule {}
