import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrillenUebersichtPage } from './brillen-uebersicht.page';


const routes: Routes = [
  {
    path: '',
    component: BrillenUebersichtPage
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index-routing.module').then(m => m.IndexPageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrillenUebersichtPageRoutingModule {}
