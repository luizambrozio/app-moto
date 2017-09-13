import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../_models/index'

import { AuthenticationService } from '../_service/authentication.service'

@Component({
  selector: 'app-login-react',
  templateUrl: './login-react.component.html'
})
export class LoginReactComponent implements OnInit {

  userForm: FormGroup
  error = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.userForm = this.formBuilder.group({
      email : this.formBuilder.control(''),
      password: this.formBuilder.control('')
    })
  }

  loginR(){
    console.log('foi: '+ this.userForm.value.email)
    this.authenticationService.login(this.userForm.value.email, this.userForm.value.password)
        .subscribe(result => {
            if (result === true) {
                this.router.navigate(['/']);
            } else {
                this.error = 'Username or password is incorrect';

            }
        });
  }

}
