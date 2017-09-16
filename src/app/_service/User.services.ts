import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { MOTO_API } from './../app_api'

import { AuthenticationService } from './authentication.service';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }

    getCurrentUser(){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.email;
    }

      CreateUser(data : User): Observable<boolean> {
         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'}) // ... Set 'application/x-www-form-urlencoded'  content type to JSON
         let options = new RequestOptions({ headers: headers }); // Create a request option

         console.log(data)
          return this.http.post(`${MOTO_API}/signup`,data, options).map((response: Response) => {
            let retorno = response.json()
            if(retorno){
              return true
            }else{
              return false
            }
          })

      }

}
