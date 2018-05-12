import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentinfoPage } from './studentinfo';

@NgModule({
  declarations: [
    StudentinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentinfoPage),
  ],
})
export class StudentinfoPageModule {}
