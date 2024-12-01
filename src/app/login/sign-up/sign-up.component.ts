import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../api/countries.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ɵElement} from "@angular/forms";
import {UserService} from "../../api/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [CountriesService],
})
export class SignUpComponent {
  countries$: Observable<any[]>;
  public form: FormGroup<any>;
  private base64Image: string = "";

  constructor(private countriesService: CountriesService, private formBuilder: FormBuilder, private service: UserService, private router: Router) {
    this.countries$ = this.countriesService.getCountries();
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      country: [null, Validators.required],
      province: [null, [Validators.required]],
      password: [null, Validators.required],
      image: [null, Validators.required],
      imageSrc: [null, []],
      phone: [null, Validators.required],
      cardidnumber: [null, Validators.required],
      street: [null, Validators.required],
      postalCode: [null, Validators.required],
      address: [null, []],
    });
  }

  get f() {
    return this.form.controls;
  }

  createUser(): void {
    this.form.patchValue({
      address: {
        country: this.form.value.country.name,
        city: this.form.value.province.name,
        street: this.form.value.street,
        postalCode: this.form.value.postalCode
      }
    })

    const payload: any = {
      address: this.form.value.address,
      email: this.form.value.email,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      userName: this.form.value.username,
      password: this.form.value.password,
      phone: this.form.value.phone,
      cardidnumber: this.form.value.cardidnumber
    }
    this.service.createUser(payload).subscribe(result => {
      console.log(result);
      const image = this.form.value.image.split("base64,");
      const imagePayload: any = {
        image: image[1],
        personId: result.personId,
        fileName: this.form.value.imageSrc
      }
      this.service.uploadImage(imagePayload, 'PERSON').subscribe(response => {
        console.log(response);

      });
      this.router.navigate(["sign-in"]);
    });
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
        imageSrc: f.name,
      })
      // Now you can use this base64 string to send it to the server or display it directly
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
  }

  goTo(routeName: string) {
    this.router.navigateByUrl(routeName);
  }


}
