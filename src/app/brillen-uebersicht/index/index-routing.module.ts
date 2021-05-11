import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage
  },
  {
    path: 'virtual-try-on',
    loadChildren: () => import('./virtual-try-on/virtual-try-on.module').then( m => m.VirtualTryOnPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
