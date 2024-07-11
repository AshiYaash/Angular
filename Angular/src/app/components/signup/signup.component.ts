import { Component,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
hide: any;


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
  Signup() {
    console.log(this.form);
    alert("Hello! I am an alert box!");
    this.router.navigate(['/login'])
  }
}