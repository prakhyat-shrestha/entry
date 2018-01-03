
import { Injectable } from '@angular/core';
import { Detail } from './details';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DetailsService {

  constructor(private http:Http) { }
  
  fetchDetails(){
         return this.http.get('http://localhost:3000/api/details')
          .map(
            (response) => response.json() )
            ; 
      }
  fetchDetailsById(id:string){
   // const url = `${"http://localhost:3000/api/repairs"}/${id}/${"details"}`;
    const url = `${"http://localhost:3000/api/details"}/${id}`;
    return this.http.get(url)
    .map(
      (response) => response.json() )
      ; 

     // http://localhost:3000/api/repairs/5a3efa18f8e026139c014359/details
  }

  addDetail(detail:Detail){

    return this.http.post("http://localhost:3000/api/details",detail)
                       .map((response) => response.json());
  }

  removeDetail(id:string){
   
     // const url = `${"http://localhost:3000/api/repairs"}/${id}/${"details"}`;
      const url = `${"http://localhost:3000/api/details"}/${id}`;
      return this.http.delete(url);
    
    
  }

  updateDetail(detail:Detail){
   // console.log(detail.repairId);
    //const url = `${"http://localhost:3000/api/details/update/?where[repairId]="}${detail.repairId}`;
    const url = `${"http://localhost:3000/api/details"}/${detail._id}`;
    return this.http.put(url, detail);
  }

}

