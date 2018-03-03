import { NgModule } from '@angular/core';

import {
  MatNativeDateModule, DateAdapter, MatSidenavModule, MatAutocompleteModule,
  MatCheckboxModule, MatDatepickerModule, MatInputModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule, MatMenuModule, MatToolbarModule, MatListModule,
  MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
  MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatRippleModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule, MatAutocompleteModule, MatNativeDateModule,
    MatCheckboxModule, MatDatepickerModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatMenuModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatRippleModule
  ],
  exports: [
    MatSidenavModule, MatAutocompleteModule, MatNativeDateModule,
    MatCheckboxModule, MatDatepickerModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatMenuModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatRippleModule
  ]
})
export class MaterialModule { }
