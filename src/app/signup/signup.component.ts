import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService, UserService } from '../_service/services.index'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  userForm: FormGroup
  error = '';
  loading = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.userForm = this.formBuilder.group({
      username: this.formBuilder.control(''),
      email : this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control('')
    })
  }

  CreateUser(){
    this.loading = true;
    this.userService.CreateUser(this.userForm.value)
        .subscribe(result => {
            if (result === true) {
                this.router.navigate(['/']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;

            }
        });
  }



}
