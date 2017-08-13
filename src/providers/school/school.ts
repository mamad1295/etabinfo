import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {SchoolModel} from '../../models/schoolModel';
import {SCHOOLS} from '../../models/mockSchool';


@Injectable()
export class SchoolProvider {
  

  constructor(public http: Http) {
    console.log('Hello SchoolProvider Provider');
  }

  getSchools(): SchoolModel[]{
    return SCHOOLS;
  }
  
}
