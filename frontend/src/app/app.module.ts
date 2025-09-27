import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Step1Component } from './Steps/step1/step1.component';
import { Step2Component } from './Steps/step2/step2.component';
import { Step3Component } from './Steps/step3/step3.component';
import { Step4Component } from './Steps/step4/step4.component';
import { FinishComponent } from './Steps/finish/finish.component';
import { CheckboxComponent } from './shared/UI/checkbox/checkbox.component';
import { GoBackButtonComponent } from './shared/UI/go-back-button/go-back-button.component';
import { InputComponent } from './shared/UI/input/input.component';
import { NextButtonComponent } from './shared/UI/next-button/next-button.component';


@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    FinishComponent,
    InputComponent,
    CheckboxComponent,
    NextButtonComponent,
    NextButtonComponent,
    GoBackButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
