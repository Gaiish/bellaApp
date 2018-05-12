import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CongratulationsPage } from '../congratulations/congratulations'
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

/**
 * Generated class for the MedicalinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicalinfo',
  templateUrl: 'medicalinfo.html',
})
export class MedicalinfoPage {

  medicalinfo = {
    medCondition: '', medConditionDescription: ''
  }

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalinfoPage');
  }

  next(){
    var infos={}
    this.storage.set('medCondition', this.medicalinfo.medCondition)
    this.storage.set('medConditionDescription', this.medicalinfo.medConditionDescription)
      .then(()=>{
        //retrive evrything and push it in firebase
        this.storage.forEach((value, key, index)=>{
          //console.log(index, key, value)
          infos[key] = value
        }).then(()=>{
          //push into firebase at students node
          this.db.list('/students').push(
            infos
          ).then(()=>{
            this.navCtrl.push(CongratulationsPage)
          })
        })

      })


    /*  .then(()=>{
        this.navCtrl.push(CongratulationsPage)
      })*/

  }
}
