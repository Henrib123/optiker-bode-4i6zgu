import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
},
  {
    path: 'brillen-uebersicht',
    loadChildren: () => import('./pages/brillen-uebersicht/brillen-uebersicht.module').then(m => m.BrillenUebersichtPageModule)
  },
  {
    path: 'kontaktlinsen',
    loadChildren: () => import('./pages/kontaktlinsen/kontaktlinsen.module').then(m => m.KontaktlinsenPageModule)
  },
  {
    path: 'meine-favoriten',
    loadChildren: () => import('./pages/meine-favoriten/meine-favoriten.module').then(m => m.MeineFavoritenPageModule)
  },
  {
    path: 'fehlerseite',
    loadChildren: () => import('./pages/fehlerseite/fehlerseite.module').then(m => m.FehlerseitePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
