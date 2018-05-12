import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicalinfoPage } from '../medicalinfo/medicalinfo'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SchoolinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schoolinfo',
  templateUrl: 'schoolinfo.html',
})
export class SchoolinfoPage {

  schoolinfo = {
    lastSchoolAttended: '', gradeCompleted: '', faculty: '',
    gradeEntering: '', startDate: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolinfoPage');
  }
  submitSkulInfo(){
    this.storage.set('lastSchoolAttended', this.schoolinfo.lastSchoolAttended)
    this.storage.set('gradeCompleted', this.schoolinfo.gradeCompleted)
    this.storage.set('faculty', this.schoolinfo.faculty)
    this.storage.set('gradeEntering', this.schoolinfo.gradeEntering)
    this.storage.set('startDate', this.schoolinfo.startDate)
      .then(()=>{
        this.navCtrl.push(MedicalinfoPage);
      })
  }

}
