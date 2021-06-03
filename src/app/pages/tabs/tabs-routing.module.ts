import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'brillen-uebersicht',
        loadChildren: () => import('../brillen-uebersicht/brillen-uebersicht.module').then(m => m.BrillenUebersichtPageModule),
     /*   children: [
          {
            path: 'brilleId',
            loadChildren:
            './brillen-uebersicht/index/index.module#IndexPage'
          }
        ] */
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'kontaktlinsen',
        loadChildren: () => import('../kontaktlinsen/kontaktlinsen.module').then(m => m.KontaktlinsenPageModule)
      },
      {
        path: 'meine-favoriten',
        loadChildren: () => import('../meine-favoriten/meine-favoriten.module').then(m => m.MeineFavoritenPageModule)
      },
      {
        path: 'fehlerseite',
        loadChildren: () => import('../fehlerseite/fehlerseite.module').then(m => m.FehlerseitePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
