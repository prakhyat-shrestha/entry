
import { Injectable } from '@angular/core';
import { Brand } from './brands';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BrandsService {

  constructor(private http:Http) { }
  
  fetchBrands(){
         return this.http.get('http://159.89.170.175:3000/api/brands')
          .map(
            (response) => response.json() )
            ; 
      }

  addBrand(brand:Brand){

    return this.http.post("http://159.89.170.175:3000/api/brands",brand);
  }

  removeBrand(id:string){
   
      const url = `${"http://159.89.170.175:3000/api/brands"}/${id}`;
      return this.http.delete(url);
    
  }

  updateBrand(brand:Brand){
    const url = `${"http://159.89.170.175:3000/api/brands"}/${brand._id}`;
    return this.http.put(url, brand);
  }

}
