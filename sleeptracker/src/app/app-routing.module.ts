import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'overnightsleep', pathMatch: 'full' },
  {
    path: 'overnightsleep',
    loadChildren: () => import('./overnightsleep/overnightsleep.module').then( m => m.OvernightsleepPageModule)
  },
  {
    path: 'sleepiness',
    loadChildren: () => import('./sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
  },
  {
    path: 'viewlogs',
    loadChildren: () => import('./viewlogs/viewlogs.module').then( m => m.ViewlogsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
