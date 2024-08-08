import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LogInComponent } from '../components/log-in/log-in.component';

const routes: Routes = [

  {
    path: '',
    component: LogInComponent,
      children:[
      {
        path: 'form',
        component: FormComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepformRoutingModule { }
