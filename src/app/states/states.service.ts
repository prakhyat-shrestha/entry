import { Injectable } from '@angular/core';
import { State } from './states';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StatesService {

  constructor(private http:Http) { }
  
  fetchStates(){
         return this.http.get('http://159.89.170.175:3000/api/states')
          .map(
            (response) => response.json() )
            ; 
      }

  addState(state:State){

    return this.http.post("http://159.89.170.175:3000/api/states",state);
  }

  removeState(id:string){
    
      const url = `${"http://159.89.170.175:3000/api/states"}/${id}`;
      return this.http.delete(url);
    
  }

  updateState(state:State){
    const url = `${"http://159.89.170.175:3000/api/states"}/${state._id}`;
    return this.http.put(url, state).map(success => success.status)
      ;
  }

}
