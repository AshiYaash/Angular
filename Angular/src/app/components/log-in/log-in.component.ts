import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
forgot() {
  console.log(this.form);
 
  this.router.navigate(['/forgot'])
}

  constructor(
    private router:Router,
  ){}
  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),

});
onSubmit() {
  console.log("reactive form submitted");
  console.log(this.form);
  }
  login() {
    console.log(this.form);
    alert("Hello! I am an alert box!");
    this.router.navigate(['/signup'])
  }
  

hide: any;


}
