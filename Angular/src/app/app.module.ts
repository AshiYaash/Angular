import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HeaderMobileViewComponent } from './components/header-mobile-view/header-mobile-view.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './components/header/header.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignupComponent,
    ForgotComponent,
    HeaderMobileViewComponent,
    HeaderComponent,

    
  ],
  imports: [
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
       ReactiveFormsModule,
       MatStepperModule,
       
    
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
