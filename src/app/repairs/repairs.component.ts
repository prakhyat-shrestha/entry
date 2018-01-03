import { Component, OnInit } from '@angular/core';
import { Repair } from './repairs';
import { Customer } from './../customers/customers';
import { RepairsService } from './repairs.service';
import { CustomersService } from './../customers/customers.service';
import { State } from './../states/states';
import { StatesService } from './../states/states.service';
import { Equipment } from './../equipments/equipments';
import { EquipmentsService } from './../equipments/equipments.service';
import { Brand } from './../brands/brands';
import { BrandsService } from './../brands/brands.service';
import { ModelsService } from './../models/models.service';
import { Model } from './../models/models';
import { Employee } from './../employees/employees';
import { EmployeesService } from './../employees/employees.service';
import { Detail } from './../details/details';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DetailsService } from '../details/details.service';
import {FilterPipe} from './../pipes';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css'],

})
export class RepairsComponent implements OnInit {

  repairs: Repair[];
  details:Detail[];
  repairForm:boolean=false;
  isNewForm:boolean;
  showDetails: boolean = false;
  newRepair:any={};
  newDetail:any={};
  customers: Customer[];
  states:State[];
  equipments:Equipment[];
  brands:Brand[];
  models:Model[];
  modelsx:Model[];
  employees:Employee[];

  sendRepair:Repair;
  sendRepairP:Repair; //P for Post or Put

  sendDetail:Detail;
  sendDetailP:Detail;

  addedData:any;

  paramNew:any;
  constructor(private repairsService:RepairsService,
              private detailsService: DetailsService,
              private customersService:CustomersService,
              private statesService:StatesService,
              private equipmentsService:EquipmentsService,
              private brandsService:BrandsService,
              private modelsService:ModelsService,
              private employeesService:EmployeesService,
              private toastr: ToastrService,
              private router:Router
            ) { 
              
            }

  ngOnInit() {
    

      this.fetchRepairs();

      this.customersService.fetchCustomers().subscribe(
      (data) => this.customers = data);
      this.statesService.fetchStates().subscribe(
        (data) => this.states = data);
      this.equipmentsService.fetchEquipments().subscribe(
          (data) => this.equipments = data);
      this.brandsService.fetchBrands().subscribe(
            (data) => this.brands = data);
      this.modelsService.fetchModelsOnly().subscribe(
        (data) => this.modelsx = data);
      this.employeesService.fetchEmployees().subscribe(
          (data) => this.employees = data); 
      
          //this.modelsService.fetchModelsByBrandId()
          
  }

  fetchRepairs(){
    this.repairsService.fetchRepairs().subscribe(
      (data) => {
      this.repairs = data;
      this.repairs.sort(this.sortByReceivedDate);
                 } );
    
      this.detailsService.fetchDetails().subscribe(
        (data) => {
          this.details = data;
        }
      );
  }

  showRepairDetails(repair: Repair) {

    this.loadRepairSyncData(repair);
    this.detailsService.fetchDetailsById(repair.detailId)
                        .subscribe((data) => {
                          this.paramNew = data;
                          //console.log(this.paramNew);
                          this.loadDetailSyncData(this.paramNew,repair.detailId);
                          this.newDetail = this.sendDetail;
                        }); 

    if (!repair) {
      this.repairForm = false;
      return;
    }
    this.repairForm = true;
    this.isNewForm = false;
    this.newRepair = this.sendRepair;
    this.showDetails = true;
  }

  showEditRepairForm(repair:Repair){

    //console.log(repair);
    this.loadRepairSyncData(repair);
    this.detailsService.fetchDetailsById(repair.detailId)
                        .subscribe((data) => {
                          this.paramNew = data;
                          //console.log(this.paramNew);
                          this.loadDetailSyncData(this.paramNew,repair.detailId);
                          this.newDetail = this.sendDetail;
                        }); 
   
    if(!repair){
      this.repairForm = false;
      return;
    }
    this.repairForm = true;
    this.isNewForm=false;
    this.newRepair = this.sendRepair;
    this.showDetails = false;
  }

  showAddRepairForm(){ 
    //resets form if edited Repair
    if(this.repairs.length){
      this.newRepair = {};
      this.newRepair.stateId = this.states[0]._id;
      this.newRepair.equipmentId = this.equipments[0]._id;
      this.newRepair.employeeId = this.employees[0]._id;
      this.newRepair.customerId = this.customers[0]._id;
      this.newDetail={};
    }
    this.repairForm = true;
    this.isNewForm = true;
    this.showDetails = false;

  }

  saveRepair(repair:Repair,detail:Detail){   

    this.sendDetailP = {
      _id: detail._id,
      cover: detail.cover,
      battery:detail.battery,
      filter:detail.filter,
      fcap:detail.fcap,
      rcap:detail.rcap,
      bcap:detail.bcap,
      strap:detail.strap,
      card:detail.card,
      eyePiece:detail.eyePiece,
      hood:detail.hood,
           
  }

      if(this.isNewForm){
            //add new detail and than repair
        this.detailsService.addDetail(this.sendDetailP).subscribe(
          (data) => {
            this.addedData = data;
            this.callRepair(repair,this.addedData._id);
            
          }
        );

        this.showAddSuccess();
      }
      else{
        //update an existing Repair
        this.callUpdateRepair(repair)
        this.callDetailUpdate(detail,detail._id);
        this.showEditSuccess();
      }
      this.repairForm = false;
  }

  removeRepair(repair){
    if(confirm("Are you sure?")){
        this.repairsService.removeRepair(repair._id)
                    .toPromise()
                    .then(() => {
                      this.detailsService.removeDetail(repair.detailId)
                          .toPromise()
                          .then(() => {
                            this.fetchRepairs();
                          });                      
                    });
        
    this.showDeleteSuccess();
      }
  }

  cancelAddEdit(){
    this.repairForm = false;
    this.fetchRepairs();
  }

  showAddSuccess() {
    this.toastr.success('Repair Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('Repair Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('Repair Deleted Successfully!!');
  }
  
  createNewCustomerLinkClicked(){
    this.router.navigate(['/customers']);
  }

  onSelect(brandId){
    this.models = this.modelsx.filter((data) => data.brandId['_id'] == brandId);
  }

  loadRepairSyncData(repair:Repair){
    console.log(repair);
    this.sendRepair = {
      _id:repair._id,
      billNo:repair.billNo,
      dateReceived:repair.dateReceived,
      dateReturned:repair.dateReturned,
      serialNo:repair.serialNo,
      problem: repair.problem,
      estimatedPrice:repair.estimatedPrice,
      chargedPrice:repair.chargedPrice,
      note:repair.note,
      description:repair.description,
      detailId: repair.detailId['_id'],
      customerId:repair.customerId['_id'],
      stateId:repair.stateId['_id'],
      brandId:repair.brandId['_id'],
      equipmentId:repair.equipmentId['_id'],
      modelId:repair.modelId['_id'],
      employeeId:repair.employeeId['_id']
    };
    this.onSelect(this.sendRepair.brandId);
  }

  loadDetailSyncData(detail:Detail,id){
    console.log(detail);
    this.sendDetail = {
      _id: id,
      cover: detail.cover,
      battery:detail.battery,
      filter:detail.filter,
      fcap:detail.fcap,
      rcap:detail.rcap,
      bcap:detail.bcap,
      strap:detail.strap,
      card:detail.card,
      eyePiece:detail.eyePiece,
      hood:detail.hood,
      
    }
  }

  callRepair(repair,id){
    this.sendRepairP = {
      _id:repair._id,
      billNo:repair.billNo,
      dateReceived:repair.dateReceived,
      dateReturned:repair.dateReturned,
      serialNo:repair.serialNo,
      problem: repair.problem,
      estimatedPrice:repair.estimatedPrice,
      chargedPrice:repair.chargedPrice,
      note:repair.note,
      description:repair.description,
      detailId: id,
      customerId:repair.customerId,
      stateId:repair.stateId,
      brandId:repair.brandId,
      equipmentId:repair.equipmentId,
      modelId:repair.modelId,
      employeeId:repair.employeeId
    };

    this.repairsService.addRepair(this.sendRepairP).subscribe(
      (data) => {
        this.fetchRepairs();
      })
  }

  callUpdateRepair(repair){
    this.sendRepairP = {
      _id:repair._id,
      billNo:repair.billNo,
      dateReceived:repair.dateReceived,
      dateReturned:repair.dateReturned,
      serialNo:repair.serialNo,
      problem: repair.problem,
      estimatedPrice:repair.estimatedPrice,
      chargedPrice:repair.chargedPrice,
      note:repair.note,
      description:repair.description,
      detailId: repair.detailId,
      customerId:repair.customerId,
      stateId:repair.stateId,
      brandId:repair.brandId,
      equipmentId:repair.equipmentId,
      modelId:repair.modelId,
      employeeId:repair.employeeId
    };

    this.repairsService.updateRepair(this.sendRepairP).subscribe(
      (data) => {
        console.log(data);
      })
  }

  callDetailUpdate(detail,id){
    console.log(detail);
    this.sendDetailP = {
      _id: id,
      cover: detail.cover,
      battery:detail.battery,
      filter:detail.filter,
      fcap:detail.fcap,
      rcap:detail.rcap,
      bcap:detail.bcap,
      strap:detail.strap,
      card:detail.card,
      eyePiece:detail.eyePiece,
      hood:detail.hood,
      
  }
  console.log(this.sendDetailP);
  this.detailsService.updateDetail(this.sendDetailP).subscribe(
    (data) => {
      console.log(data);
      this.fetchRepairs();
    }
  )
  }

sortByReceivedDate(a:Repair,b:Repair){
   if (a.billNo.valueOf() > b.billNo.valueOf()) {
    return -1;
  } else if (a.billNo.valueOf() < b.billNo.valueOf()) {
    return 1;
  } else {
    return 0;
  }
}
}
