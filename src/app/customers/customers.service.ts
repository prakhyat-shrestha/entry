import { Injectable } from '@angular/core';
import { Customer } from './customers';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomersService {

  constructor(private http:Http) { }
  
  fetchCustomers(){
         return this.http.get('http://localhost:3000/api/customers')
          .map(
            (response) => response.json() )
            ; 
      }

  addCustomer(customer:Customer){

    return this.http.post("http://localhost:3000/api/customers",customer);
  }

  removeCustomer(id:string){
    
      const url = `${"http://localhost:3000/api/customers"}/${id}`;
      return this.http.delete(url);
    
  }

  updateCustomer(customer:Customer){
    const url = `${"http://localhost:3000/api/customers"}/${customer._id}`;
    return this.http.put(url,customer);
  }

}
