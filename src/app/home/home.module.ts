import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {HomeComponent} from "./home.component";
import {UserComponent} from "../manage/user/user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [HomeComponent,UserComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
