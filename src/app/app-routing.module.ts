import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from "./login/login.page";
import {SignInComponent} from "./login/sign-in/sign-in.component";
import {SignUpComponent} from "./login/sign-up/sign-up.component";
import {UserComponent} from "./manage/user/user.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  { path: '', redirectTo: 'login',pathMatch: 'full' },

  {
    path: 'login',
    component:LoginPage,
    children: [
      { path: 'sign-in',     component:SignInComponent,
      },
      { path: 'sign-up',     component:SignUpComponent,
      },    ]
  },
  {
    path: 'home',
    component:HomeComponent,
    children: [
      {
        path: 'manage-user',
        component:UserComponent
      } ]
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
