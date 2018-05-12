import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalinfoPage } from './medicalinfo';

@NgModule({
  declarations: [
    MedicalinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalinfoPage),
  ],
})
export class MedicalinfoPageModule {}
