import { Injectable } from '@angular/core';
import { Employee } from './employees';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeesService {

  constructor(private http:Http) { }
  
  fetchEmployees(){
         return this.http.get('http://159.89.170.175:3000/api/employees')
          .map(
            (response) => response.json() )
            ; 
      }

  addEmployee(employee:Employee){

    return this.http.post("http://159.89.170.175:3000/api/employees",employee);
  }

  removeEmployee(id:string){
 
      const url = `${"http://159.89.170.175:3000/api/employees"}/${id}`;
      return this.http.delete(url);
    
  }

  updateEmployee(employee:Employee){
    const url = `${"http://159.89.170.175:3000/api/employees"}/${employee._id}`;
    return this.http.put(url,employee);
  }

}
