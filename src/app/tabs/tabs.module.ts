import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'tab1', loadChildren: '../pages/first/first.module#FirstPageModule' },
      { path: 'tab2', loadChildren: '../pages/second/second.module#SecondPageModule' }

      // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
      // { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
      // { path: 'pay', loadChildren: './pages/pay/pay.module#PayPageModule' },
      // { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [TabsPage]
})
export class TabsPageModule {}
