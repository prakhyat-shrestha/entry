import { Component, OnInit } from '@angular/core';
import { Equipment } from './equipments';
import { EquipmentsService } from './equipments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  equipments: Equipment[];
  equipmentForm:boolean=false;
  isNewForm:boolean;
  showDetails:boolean=false;
  newEquipment:any={};

  constructor(private equipmentsService:EquipmentsService,
                private toastr: ToastrService) { }

  ngOnInit() {
      this.fetchEquipments();
  }

  fetchEquipments(){
    this.equipmentsService.fetchEquipments().subscribe(
      (data) => this.equipments = data );
  }

  showEquipmentDetails(Equipment:Equipment){
    if(!Equipment){
      this.equipmentForm = false;
      return;
    }
    this.equipmentForm = true;
    this.isNewForm=false;
    this.newEquipment = Equipment;
    this.showDetails = true;
  }

  showEditEquipmentForm(Equipment:Equipment){
    if(!Equipment){
      this.equipmentForm = false;
      return;
    }
    this.equipmentForm = true;
    this.isNewForm=false;
    this.newEquipment = Equipment;
    this.showDetails = false;
  }

  showAddEquipmentForm(){
    //resets form if edited Equipment
    console.log(this.equipments.length);
    if(this.equipments.length){
      this.newEquipment = {};
    }
    this.equipmentForm = true;
    this.isNewForm = true;
    this.showDetails = false;
  }

  saveEquipment(Equipment:Equipment){
      if(this.isNewForm){
        //add a new Equipment
        this.equipmentsService.addEquipment(Equipment).subscribe(
          (data) => {
            console.log(data);
            this.fetchEquipments();
          }
        );
        this.showAddSuccess();
      }
      else{
        //update an existing Equipment
        this.equipmentsService.updateEquipment(Equipment).toPromise()
        .then( () => {
          this.fetchEquipments();
        }
        );
        this.showEditSuccess();
      }
      this.equipmentForm = false;

  }

  removeEquipment(id){
    if(confirm("Are you sure?")){
    this.equipmentsService.removeEquipment(id).toPromise()
    .then( () => {
         this.fetchEquipments();
       }
       );
       this.showDeleteSuccess();
      }
  }

  cancelAddEdit(){
    this.equipmentForm = false;
    this.fetchEquipments();
  }

  showAddSuccess() {
    this.toastr.success('Equipment Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('Equipment Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('Equipment Deleted Successfully!!');
  }
}

