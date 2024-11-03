import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../api/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  {
  public form: FormGroup<any>;

  constructor(private formBuilder: FormBuilder, private service:UserService,private router: Router) {
    this.form = this.formBuilder.group({
      username: [null,[Validators.required,Validators.email]],
      password: [null, Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  signIn():void{
    this.service.signIn(this.form.value).subscribe(result=>{
      console.log(result);
    });
  }

  goTo(routeName: string) {
    this.router.navigateByUrl(routeName);
  }

}
