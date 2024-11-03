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
  private base64Image: string ="";

  constructor(private countriesService: CountriesService,private formBuilder: FormBuilder, private service:UserService) {
    this.countries$ =    this.countriesService.getCountries();
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null,[Validators.required,Validators.email]],
      country: [null, Validators.required],
      province: [null,[]],
      password: [null, Validators.required],
      image:[null, Validators.required],
      imageSrc:[null, []],
      address:[null, Validators.required],
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

   openFileDialog = () => {
    (document as any).getElementById("file-upload").click();
  };
   setImage = (_event: any) => {
    let f = _event.target.files![0];
    console.log(f)
     const reader = new FileReader();

     reader.readAsDataURL(f);
     reader.onload
       = () => {
       this.base64Image = reader.result as string;
this.form.patchValue({
  image: this.base64Image,
  imageSrc:f.name,
})
       // Now you can use this base64 string to send it to the server or display it directly
     };
     reader.onerror = (error) => {
       console.error('Error reading file:', error);
     };
   }

}