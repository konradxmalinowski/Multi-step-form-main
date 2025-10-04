import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { InputComponent } from './components/input/input.component';
import { NextButtonComponent } from './components/next-button/next-button.component';
import { StepComponent } from './components/step/step.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CheckboxComponent,
    NextButtonComponent,
    NextButtonComponent,
    GoBackButtonComponent,
    StepComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
