import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from '../../components/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: UserDashboardComponent,
        // children: [
        //     { path: '', component: '' },
        //     { path: 'component2', loadChildren: './../component2-module/component2.module#Component2Module' }
        // ]
    },
    { path: '**', redirectTo: '/user' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
