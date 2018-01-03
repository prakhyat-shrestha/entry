import { Component, OnInit } from '@angular/core';
import { Detail } from './details';
import { DetailsService } from './details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: Detail[];
  detailForm:boolean=false;
  isNewForm:boolean;
  showDetails:boolean=false;
  newDetail:any={};

  constructor(private detailsService:DetailsService,
                private toastr: ToastrService) { }

  ngOnInit() {
      this.fetchDetails();
  }

  fetchDetails(){
    this.detailsService.fetchDetails().subscribe(
      (data) => this.details = data );
  }

  showDetailDetails(Detail:Detail){
    if(!Detail){
      this.detailForm = false;
      return;
    }
    this.detailForm = true;
    this.isNewForm=false;
    this.newDetail = Detail;
    this.showDetails = true;
  }

  showEditDetailForm(Detail:Detail){
    if(!Detail){
      this.detailForm = false;
      return;
    }
    this.detailForm = true;
    this.isNewForm=false;
    this.newDetail = Detail;
    this.showDetails = false;
  }

  showAddDetailForm(){
    //resets form if edited Detail
    console.log(this.details.length);
    if(this.details.length){
      this.newDetail = {};
    }
    this.detailForm = true;
    this.isNewForm = true;
    this.showDetails = false;
  }

  saveDetail(Detail:Detail){
      if(this.isNewForm){
        //add a new Detail
        this.detailsService.addDetail(Detail).subscribe(
          (data) => {
            console.log(data);
            this.fetchDetails();
          }
        );
        this.showAddSuccess();
      }
      else{
        //update an existing Detail
        this.detailsService.updateDetail(Detail).toPromise()
        .then( () => {
          this.fetchDetails();
        }
        );
 
        this.showEditSuccess();
      }
      this.detailForm = false;

  }

  removeDetail(id){
    this.detailsService.removeDetail(id).toPromise()
    .then( () => {
         this.fetchDetails();
       }
       );
       this.showDeleteSuccess();
  }

  cancelAddEdit(){
    this.detailForm = false;
    this.fetchDetails();
  }

  showAddSuccess() {
    this.toastr.success('Detail Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('Detail Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('Detail Deleted Successfully!!');
  }
}
