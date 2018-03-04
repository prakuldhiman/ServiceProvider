import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
const routes: Routes = [
    {
        path: 'user',
        loadChildren: 'app/modules/user-module/user.module#UserModule'
    },

    { path: '**', redirectTo: '/user' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
