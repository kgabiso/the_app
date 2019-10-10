import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServicesGuard } from './services/services.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  // { path: 'pay', loadChildren: './pages/pay/pay.module#PayPageModule' },
  // { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [ServicesGuard] },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [ServicesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
