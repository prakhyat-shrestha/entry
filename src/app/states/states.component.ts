import { Component, OnInit } from '@angular/core';
import { State } from './states';
import { StatesService } from './states.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  states: State[];
  stateForm:boolean=false;
  isNewForm:boolean;
  showDetails:boolean=false;
  newState:any={};

  constructor(private statesService:StatesService,
                private toastr: ToastrService) { }

  ngOnInit() {
      this.fetchStates();
  }

  fetchStates(){
    this.statesService.fetchStates().subscribe(
      (data) => this.states = data );
  }

  showStateDetails(State:State){
    if(!State){
      this.stateForm = false;
      return;
    }
    this.stateForm = true;
    this.isNewForm=false;
    this.newState = State;
    this.showDetails = true;
  }

  showEditStateForm(State:State){
    if(!State){
      this.stateForm = false;
      return;
    }
    this.stateForm = true;
    this.isNewForm=false;
    this.newState = State;
    this.showDetails = false;
  }

  showAddStateForm(){
    //resets form if edited State
    console.log(this.states.length);
    if(this.states.length){
      this.newState = {};
    }
    this.stateForm = true;
    this.isNewForm = true;
    this.showDetails = false;
  }

  saveState(State:State){
      if(this.isNewForm){
        //add a new State
        this.statesService.addState(State).subscribe(
          (data) => {
            console.log(data);
            this.fetchStates();
          }
        );
        this.showAddSuccess();
      }
      else{
        //update an existing State
/*         this.statesService.updateState(State).toPromise()
        .then( () => {
          this.fetchStates();
        }
        ); */
        this.statesService.updateState(State).toPromise()
        .then( () => {
          this.fetchStates();
        }
        );
        this.showEditSuccess();
      }
      this.stateForm = false;

  }

  removeState(id){
    if(confirm("Are you sure?")){
    this.statesService.removeState(id).toPromise()
    .then( () => {
         this.fetchStates();
       }
       );
       this.showDeleteSuccess();
      }
  }

  cancelAddEdit(){
    this.stateForm = false;
    this.fetchStates();
  }

  showAddSuccess() {
    this.toastr.success('State Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('State Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('State Deleted Successfully!!');
  }
}
