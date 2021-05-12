import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrillenUebersichtPage } from './brillen-uebersicht.page';

const routes: Routes = [
  {
    path: '',
    component: BrillenUebersichtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrillenUebersichtPageRoutingModule {}
