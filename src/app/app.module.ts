import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { MyApp } from './app.component';
import { SchoolinfoPage } from '../pages/schoolinfo/schoolinfo';
import { MedicalinfoPage } from '../pages/medicalinfo/medicalinfo';
import { HomePage } from '../pages/home/home';
import { StudentinfoPage } from '../pages/studentinfo/studentinfo';
import { CongratulationsPage } from '../pages/congratulations/congratulations'
import { IonicStorageModule } from '@ionic/storage';

var config = {
    apiKey: "AIzaSyBJM6IO8-HQKhAKTW7uC2YvmBwJ8jHMfwU",
    authDomain: "bellaapp-807a7.firebaseapp.com",
    databaseURL: "https://bellaapp-807a7.firebaseio.com",
    projectId: "bellaapp-807a7",
    storageBucket: "",
    messagingSenderId: "382814803778"
  };

@NgModule({
  declarations: [
    MyApp,
    MedicalinfoPage,
    SchoolinfoPage,
    HomePage,
    StudentinfoPage,
    CongratulationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MedicalinfoPage,
    SchoolinfoPage,
    StudentinfoPage,
    CongratulationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
