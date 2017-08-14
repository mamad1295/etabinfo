import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolsPage } from './schools';
import { SchoolProvider } from '../../providers/school/school'

@NgModule({
  declarations: [
    SchoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolsPage),
  ],
  providers: [
    SchoolProvider
  ]
})
export class SchoolsPageModule {}
