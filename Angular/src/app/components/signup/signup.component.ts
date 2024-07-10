import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  Roles: any = ['Admin', 'Author', 'Reader'];
hide: any;
hide1: any;
constructor() {

 }
  ngOnInit() {
   
  }
Signup(){
alert("Signup Successfully");

}
}
