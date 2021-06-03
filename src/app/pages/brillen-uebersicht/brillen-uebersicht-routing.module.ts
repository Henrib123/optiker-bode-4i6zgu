import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrillenUebersichtPage } from './brillen-uebersicht.page';
import {IndexPage} from "./index/index.page";


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
  imports: [RouterModule.forChild(routes: [
  {path: 'index', children:[
      {path: '', component: IndexPage},
      {path:':index', component: IndexPage}
    ] },
])]

})
export class BrillenUebersichtPageRoutingModule {}
