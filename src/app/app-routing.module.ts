import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
const routes: Routes = [
    {
        path: 'component1',
        loadChildren: './modules/component1-module/component1.module#Component1Module'
    },
    {
        path: 'component2',
        loadChildren: './modules/component2-module/component2.module#Component2Module'
    },

    { path: '**', redirectTo: '/component1' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
