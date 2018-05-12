import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { SchoolinfoPage } from '../schoolinfo/schoolinfo';
import { StudentinfoPage } from '../studentinfo/studentinfo'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //userData = {}
  constructor(public navCtrl: NavController) {

  }
  register(){
    this.navCtrl.push(StudentinfoPage);
  }

}
