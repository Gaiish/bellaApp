import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SchoolinfoPage } from '../schoolinfo/schoolinfo';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the StudentinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentinfo',
  templateUrl: 'studentinfo.html',
})
export class StudentinfoPage {
  studinfo = {firstname: '', lastname: '', email: '', birthdate: '',
                address: '', country: '', gender: ''
              }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentinfoPage');
  }

  submitStudInfo(){
    this.storage.set('firstname', this.studinfo.firstname)
    this.storage.set('lastname', this.studinfo.lastname)
    this.storage.set('email', this.studinfo.email)
    this.storage.set('birthdate', this.studinfo.birthdate)
    this.storage.set('address', this.studinfo.address)
    this.storage.set('country', this.studinfo.country)
    this.storage.set('gender', this.studinfo.gender).then(()=>{
      this.navCtrl.push(SchoolinfoPage);
    })
  }

}
