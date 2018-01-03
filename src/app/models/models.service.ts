import { Injectable } from '@angular/core';
import { Model } from './models';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ModelsService {

  constructor(private http:Http) { }
  
  fetchModels(){
    //return this.http.get('http://localhost:3000/api/models?filter[include]=brand&filter[include]=equipment')
    return this.http.get('http://localhost:3000/api/models')
          .map(
            (response) => response.json() )
            ; 
      }

      fetchModelsOnly(){
        return this.http.get('http://localhost:3000/api/models')
              .map(
                (response) => response.json() )
                ; 
          }


  addModel(model:Model){

    return this.http.post("http://localhost:3000/api/models",model);
  }

  removeModel(id:string){
   
      const url = `${"http://localhost:3000/api/models"}/${id}`;
      return this.http.delete(url);
    
  }

  updateModel(model:Model){
    const url = `${"http://localhost:3000/api/models"}/${model._id}`;
    return this.http.put(url, model);
  }


}

