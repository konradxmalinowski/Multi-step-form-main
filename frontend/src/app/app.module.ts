import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './components/radio-button/radio-button.component';
import { InputComponent } from './components/input/input.component';
import { StepComponent } from './components/step/step.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddOnComponent } from './components/add-on/add-on.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CheckboxComponent,
    StepComponent,
    HeroComponent,
    AddOnComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
