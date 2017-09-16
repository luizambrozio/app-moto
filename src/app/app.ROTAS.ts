import { Routes, RouterModule } from '@angular/router';

import { LoginReactComponent } from './login-react/login-react.component'
import { SignupComponent } from './signup/signup.component'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './_guard/AuthGuard.index'

const appRoutes: Routes = [
    { path: 'login', component: LoginReactComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const ROTAS = RouterModule.forRoot(appRoutes);
