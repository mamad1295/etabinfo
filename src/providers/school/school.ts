import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {SchoolModel} from '../../models/schoolModel';
import {SCHOOLS} from '../../models/mockSchool';


@Injectable()
export class SchoolProvider {
  
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    console.log('Hello SchoolProvider Provider');
    this.http = http;
    this.baseUrl = 'https://www.reddit.com/r';
  }

   getSchools(): Promise<SchoolModel[]>{
    return Promise.resolve(SCHOOLS);
  } 
  
  getPosts(category, limit){
    console.log("from service "+this.baseUrl+'/'+category
      +'/top.json?limit='+limit);
    return this.http.get(this.baseUrl+'/'+category
      +'/top.json?limit='+limit).map(res => res.json());
  }
}
