import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HttpClientModule} from "@angular/common/http";
import {SignInComponent} from "./sign-in/sign-in.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  declarations: [LoginPage,SignUpComponent,SignInComponent]
})
export class LoginPageModule {}
