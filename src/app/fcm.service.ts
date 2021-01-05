import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { ToastController } from "@ionic/angular";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private angularFireFunctions: AngularFireFunctions,
    private toastController: ToastController
  ) { }


  async makeToast(message) {
    const toast = await this.toastController.create({
      message
    });

    toast.present();
  }

  getPermission() {
    this.angularFireMessaging.requestToken
      .pipe(
        tap((data) => console.log({data}))
      )
      .subscribe((data) => {

      },(error) => {
        console.log('Something went wrong', error)
      })
  }

}
