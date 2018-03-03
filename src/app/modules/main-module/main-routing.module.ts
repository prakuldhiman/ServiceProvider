// import { DashboardComponent } from './../../components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: MainComponent,
    children: [
      {
        path: '',
        // component: DashboardComponent
      },
      {
        path: 'component2',
        loadChildren: './../component2-module/component2.module#Component2Module'
      }
    ]
  },

  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
