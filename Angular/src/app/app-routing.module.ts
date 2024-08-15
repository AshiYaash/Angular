import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HeaderMobileViewComponent } from './components/header-mobile-view/header-mobile-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './stepform/form/form.component';

const routes: Routes = [
 
    // {
    //   path: '',
    //   redirectTo: 'components',
    //   pathMatch: 'full',
    // },{
    //   path: '',
    //   component:FormComponent,
    //   children: [{
    //     path: '',
    //     loadChildren: () => import('./stepform/form/form.component').then()
    //   }]
    // }
    // ,  
  { path: '', pathMatch: 'full', redirectTo: 'signup' },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'header-mobile-view', component:HeaderMobileViewComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
