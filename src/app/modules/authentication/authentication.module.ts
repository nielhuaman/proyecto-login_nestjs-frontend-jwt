import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// import {AngularFireModule} from '@angular/fire';
// import {AngularFireFunctionsModule} from '@angular/fire/functions';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../../../environments/environment.prod';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireFunctionsModule,
    FormsModule,
    HttpClientModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
