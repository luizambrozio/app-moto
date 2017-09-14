import { Component, OnInit } from '@angular/core';

import { User } from './../_models/index'
import { AuthenticationService, UserService } from './../_service/services.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  users : User;

  constructor(private authentication: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getCurrentUser()
    console.log(this.users)
  }

}
