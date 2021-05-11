import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeineFavoritenPage } from './meine-favoriten.page';

const routes: Routes = [
  {
    path: '',
    component: MeineFavoritenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeineFavoritenPageRoutingModule {}
