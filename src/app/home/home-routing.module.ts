import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "../login/sign-up/sign-up.component";
import {SignInComponent} from "../login/sign-in/sign-in.component";
import {UserComponent} from "../manage/user/user.component";

const routes: Routes = [{
  path: 'manage-user',
  component: UserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
