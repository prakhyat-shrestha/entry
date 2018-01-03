import { Injectable } from '@angular/core';
import { Repair } from './repairs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RepairsService {

  constructor(private http:Http) { }
  

  fetchRepairs() {

    return this.http.get("http://localhost:3000/api/repairs")                 
                    .map( (response) => response.json() ); 
    }
      
  addRepair(repair:Repair){

    return this.http.post("http://localhost:3000/api/repairs",repair)
                    .map((response) => response.json());
  }

  removeRepair(id:string){
    
      const url = `${"http://localhost:3000/api/repairs"}/${id}`;
      return this.http.delete(url) ;
    
  }

  updateRepair(repair:Repair){
    
    const url = `${"http://localhost:3000/api/repairs"}/${repair._id}`;
    return this.http.put(url,repair);
  }



}







