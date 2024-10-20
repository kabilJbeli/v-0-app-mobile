import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../../api/countries.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ɵElement} from "@angular/forms";
import {UserService} from "../../api/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [CountriesService],
})
export class SignUpComponent  implements OnInit {
  countries$: Observable<any[]>;
  public form: FormGroup<any>;

  constructor(private countriesService: CountriesService,private formBuilder: FormBuilder, private service:UserService) {
    this.countries$ =    this.countriesService.getCountries();
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      country: [null, Validators.required],
      province: [null,[]],
      password: [null, Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }

  createUser():void{
    this.service.createUser(this.form.value).subscribe(result=>{
      console.log(result);
    });
  }

  ngOnInit() {

  }

}
