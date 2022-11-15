import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // property to hold form
  public signupForm: FormGroup;

  // inject FormBuilder
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // initalize the from control
    this.signupForm = this.formBuilder.group({
      fullName: [''],
      phoneNumber: [''],
      emailAddress: [''],
      password: ['']
    })
  }

  signUp() {

  }

}
