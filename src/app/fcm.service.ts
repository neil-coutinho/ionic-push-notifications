import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { ToastController } from "@ionic/angular";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token: string = null;
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
        tap((token) => this.token = token)
      )
      .subscribe((data) => {
        console.log({data});
      },(error) => {
        console.log('Something went wrong', error)
      })
  }

  showMessages() {
    this.angularFireMessaging.messages
      .pipe(
        tap(message => {

        })
      )
      .subscribe((message) => {
        console.log({message})
      })
  }


  sub(topic) {
    console.log('sub', topic)
    this.angularFireFunctions
      .httpsCallable('subscribeToTopic')({topic, token: this.token})
        .pipe(
          tap(
            (res) => console.log({res})
          )
        )
        .subscribe()
  }


  unsub(topic) {
    console.log('unsub', topic)
    this.angularFireFunctions
      .httpsCallable('unsubscribeFromTopic')({topic, token: this.token})
        .pipe(
          tap(
            (res) => console.log({res})
          )
        )
        .subscribe()
  }

}
