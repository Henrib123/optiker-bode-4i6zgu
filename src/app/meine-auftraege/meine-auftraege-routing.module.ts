import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeineAuftraegePage } from './meine-auftraege.page';

const routes: Routes = [
  {
    path: '',
    component: MeineAuftraegePage
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeineAuftraegePageRoutingModule {}
