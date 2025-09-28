import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './shared/UI/checkbox/checkbox.component';
import { GoBackButtonComponent } from './shared/UI/go-back-button/go-back-button.component';
import { InputComponent } from './shared/UI/input/input.component';
import { NextButtonComponent } from './shared/UI/next-button/next-button.component';
import { StepComponent } from './step/step.component';


@NgModule({
  declarations: [
    AppComponent,

    InputComponent,
    CheckboxComponent,
    NextButtonComponent,
    NextButtonComponent,
    GoBackButtonComponent,
    StepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
