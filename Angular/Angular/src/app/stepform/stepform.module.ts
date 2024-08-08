import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';


import {MatDividerModule} from '@angular/material/divider';
import { StepformRoutingModule } from './stepform-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    StepformRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
     FormsModule,ReactiveFormsModule,
     MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
     MatDividerModule,
       MatIconModule,
       MatButtonModule,
       MatStepperModule,
      
  ]
})
export class StepformModule { }
