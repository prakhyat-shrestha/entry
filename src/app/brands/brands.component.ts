import { Component, OnInit } from '@angular/core';
import { Brand } from './brands';
import { BrandsService } from './brands.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: Brand[];
  brandForm:boolean=false;
  isNewForm:boolean;
  showDetails:boolean=false;
  newBrand:any={};

  constructor(private brandsService:BrandsService,
                private toastr: ToastrService) { }

  ngOnInit() {
      this.fetchBrands();
  }

  fetchBrands(){
    this.brandsService.fetchBrands().subscribe(
      (data) => this.brands = data );
  }

  showBrandDetails(Brand:Brand){
    if(!Brand){
      this.brandForm = false;
      return;
    }
    this.brandForm = true;
    this.isNewForm=false;
    this.newBrand = Brand;
    this.showDetails = true;
  }

  showEditBrandForm(Brand:Brand){
    if(!Brand){
      this.brandForm = false;
      return;
    }
    this.brandForm = true;
    this.isNewForm=false;
    this.newBrand = Brand;
    this.showDetails = false;
  }

  showAddBrandForm(){
    //resets form if edited Brand
    console.log(this.brands.length);
    if(this.brands.length){
      this.newBrand = {};
    }
    this.brandForm = true;
    this.isNewForm = true;
    this.showDetails = false;
  }

  saveBrand(Brand:Brand){
      if(this.isNewForm){
        //add a new Brand
        this.brandsService.addBrand(Brand).subscribe(
          (data) => {
            console.log(data);
            this.fetchBrands();
          }
        );
        this.showAddSuccess();
      }
      else{
        //update an existing Brand
       
        this.brandsService.updateBrand(Brand).toPromise()
        .then( () => {
          this.fetchBrands();
        }
        );
 
        this.showEditSuccess();
      }
      this.brandForm = false;

  }

  removeBrand(id){
    if(confirm("Are you sure?")){
    this.brandsService.removeBrand(id).toPromise()
    .then( () => {
         this.fetchBrands();
       }
       );
       this.showDeleteSuccess();
      }
  }

  cancelAddEdit(){
    this.brandForm = false;
    this.fetchBrands();
  }

  showAddSuccess() {
    this.toastr.success('Brand Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('Brand Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('Brand Deleted Successfully!!');
  }
}
