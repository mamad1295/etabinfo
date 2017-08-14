import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolDetailsPage } from './school-details';

@NgModule({
  declarations: [
    SchoolDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolDetailsPage),
  ],
})
export class SchoolDetailsPageModule {}
