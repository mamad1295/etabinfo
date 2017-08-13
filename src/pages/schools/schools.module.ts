import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolsPage } from './schools';

@NgModule({
  declarations: [
    SchoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolsPage),
  ],
})
export class SchoolsPageModule {}
