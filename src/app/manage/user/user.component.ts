import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../api/user.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  public form: FormGroup<any>;

  constructor(private formBuilder: FormBuilder, private service:UserService,private router: Router,private toastController: ToastController) {
    this.form = this.formBuilder.group({
      email: [null,[Validators.required]],
      oldPassword: [null,[Validators.required]],
      newPassword: [null, Validators.required],
    });
  }

  ngOnInit() {}
  updatePassword():void{
    this.service.patchUser(this.form.value).subscribe(()=>{
      this.form.reset();
this.presentToast("top","Password Updated");
    },error => {
      this.presentToast("top","An error has occurred");

    })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom',message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
