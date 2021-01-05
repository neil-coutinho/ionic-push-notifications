import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireFunctionsModule } from '@angular/fire/functions';



console.log(environment.firebase)
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyChKobqlHYG9U-yjBIPs2fTdm3TT_jE7-c",
      // authDomain: "push-notifications-a7993.firebaseapp.com",
      // projectId: "push-notifications-a7993",
      // storageBucket: "push-notifications-a7993.appspot.com",
      // messagingSenderId: "437327802529",
      appId: "1:437327802529:web:fe3ed9ac4eb2e06df700e0"
    }),
   
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
