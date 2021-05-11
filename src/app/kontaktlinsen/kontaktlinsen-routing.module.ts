import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KontaktlinsenPage } from './kontaktlinsen.page';

const routes: Routes = [
  {
    path: '',
    component: KontaktlinsenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontaktlinsenPageRoutingModule {}
