import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http:Http) { }

  fetchData(){
/*     return this.http.get('http://localhost:3000/api/items')
      .map(
        (response) => response.json() )
        ; */
  }

}
