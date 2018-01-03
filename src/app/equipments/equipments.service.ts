
import { Injectable } from '@angular/core';
import { Equipment } from './equipments';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EquipmentsService {

  constructor(private http:Http) { }
  
  fetchEquipments(){
         return this.http.get('http://localhost:3000/api/equipments')
          .map(
            (response) => response.json() )
            ; 
      }

  addEquipment(equipment:Equipment){

    return this.http.post("http://localhost:3000/api/equipments",equipment);
  }

  removeEquipment(id:string){
    
      const url = `${"http://localhost:3000/api/equipments"}/${id}`;
      return this.http.delete(url);
    
  }

  updateEquipment(equipment:Equipment){
    const url = `${"http://localhost:3000/api/equipments"}/${equipment._id}`;
    return this.http.put(url,equipment);
  }

}

