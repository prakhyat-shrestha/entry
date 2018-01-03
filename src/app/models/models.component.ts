import { Component, OnInit } from '@angular/core';
import { Model } from './models';
import { Brand } from './../brands/brands';
import { Equipment } from './../equipments/equipments';
import { ModelsService } from './models.service';
import { ToastrService } from 'ngx-toastr';
import { BrandsService } from './../brands/brands.service';
import { EquipmentsService } from './../equipments/equipments.service';
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  models: Model[];
  modelForm:boolean=false;
  isNewForm:boolean;
  showDetails:boolean=false;
  newModel:any={ };
  newModelx:any={};
  brands: Brand[];
  equipments: Equipment[];
  sendModel:Model;

  constructor(private modelsService:ModelsService,
              private toastr: ToastrService,
              private brandsService:BrandsService,
              private equipmentsService:EquipmentsService
             
            ) {

             }

  ngOnInit() {
      this.fetchModels();

      this.brandsService.fetchBrands().subscribe(
        (data) => this.brands = data); 

      this.equipmentsService.fetchEquipments().subscribe(
        (data) => this.equipments = data
      );

  }

  fetchModels(){
    this.modelsService.fetchModels().subscribe(
      (data) => 
        this.models = data );
  }

  showModelDetails(model:Model){
    if(!model){
      this.modelForm = false;
      return;
    }
    this.modelForm = true;
    this.isNewForm=false;
    this.newModel = model;
    this.newModel.brandId = model.brandId['_id'];
    this.newModel.equipmentId = model.equipmentId['_id'];
    this.showDetails = true;
  }

  showEditModelForm(model:Model){
    console.log(model);
    if(!model){
      this.modelForm = false;
      return;
    }
    this.modelForm = true;
    this.isNewForm=false;
     this.newModel = model;
    this.newModel.brandId = model.brandId['_id'];
    this.newModel.equipmentId = model.equipmentId['_id'];
    this.showDetails = false;
  }

  showAddModelForm(){
    //resets form if edited Model
    console.log(this.models.length);
    if(this.models.length){
      this.newModel = {};
    }
    this.modelForm = true;
    this.isNewForm = true;
    this.showDetails = false;
  }

  saveModel(model:Model){
    console.log(model);
    
    this.sendModel = {
      _id: model._id,
      model_Name: model.model_Name,
      model_Description:model.model_Description,
      brandId: model.brandId,
      equipmentId: model.equipmentId
    }

      if(this.isNewForm){
        //add a new Model
        this.modelsService.addModel(this.sendModel).subscribe(
          (data) => {
            
            this.fetchModels();
          }
        );
        this.showAddSuccess();
      }
      else{
        //update an existing Model
        
        this.modelsService.updateModel(this.sendModel).toPromise()
        .then( (data) => {
          //console.log(data);
          this.fetchModels();
        }
        );
        console.log(model);

        this.showEditSuccess();
      }
      this.modelForm = false;
      

  }

  removeModel(id){
    if(confirm("Are you sure?")){
    this.modelsService.removeModel(id).toPromise()
    .then( () => {
         this.fetchModels();
       }
       );
       this.showDeleteSuccess();
      }
  }

  cancelAddEdit(){
    this.modelForm = false;
    this.fetchModels();
  }

  showAddSuccess() {
    this.toastr.success('Model Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('Model Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('Model Deleted Successfully!!');
  }

  getBrandName(id){
    for(let brand of this.brands){
        if(brand._id == id){
          return brand.brandName;
        }
    }
    return "Not Available.";
  }

  getEquipmentName(id) {
    for (let equipment of this.equipments) {
      if (equipment._id == id) {
        return equipment.equipmentName;
      }
    }
    return "Not Available.";
  }

}

