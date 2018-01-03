import { Injectable } from '@angular/core';
import { Customer } from './customers';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomersService {

  constructor(private http:Http) { }
  
  fetchCustomers(){
         return this.http.get('http://159.89.170.175:3000/api/customers')
          .map(
            (response) => response.json() )
            ; 
      }

  addCustomer(customer:Customer){

    return this.http.post("http://159.89.170.175:3000/api/customers",customer);
  }

  removeCustomer(id:string){
    
      const url = `${"http://159.89.170.175:3000/api/customers"}/${id}`;
      return this.http.delete(url);
    
  }

  updateCustomer(customer:Customer){
    const url = `${"http://159.89.170.175:3000/api/customers"}/${customer._id}`;
    return this.http.put(url,customer);
  }

}
