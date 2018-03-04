// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserRoutingModule } from './user-routing.module';
import { SharingModule } from '../../commonModules/sharing.module';

// Components
import { UserDashboardComponent } from '../../components/user/user-dashboard/user-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        UserRoutingModule,
        SharingModule
    ],
    declarations: [
        UserDashboardComponent
    ],
    entryComponents: [
    ]
})
export class UserModule { }
