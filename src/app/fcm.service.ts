import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { ToastController } from "@ionic/angular";

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

}
