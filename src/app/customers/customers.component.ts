import { Component, OnInit } from '@angular/core';
import { Customer } from './customers';
import { CustomersService } from './customers.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validator, ValidationErrors } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  customerForm:boolean=false;
  isNewForm:boolean;
  showDetails:boolean=false;
  newCustomer:any={};

  constructor(private customersService:CustomersService,
                private toastr: ToastrService) { }

  ngOnInit() {
      this.fetchCustomers();
  }

  fetchCustomers(){
    this.customersService.fetchCustomers().subscribe(
      (data) => {
        this.customers = data;
        this.customers.sort(this.sortByCustomerName);
      } );
  }

  showCustomerDetails(customer:Customer){
    if(!customer){
      this.customerForm = false;
      return;
    }
    this.customerForm = true;
    this.isNewForm=false;
    this.newCustomer = customer;
    this.showDetails = true;
  }

  showEditCustomerForm(customer:Customer){
    if(!customer){
      this.customerForm = false;
      return;
    }
    this.customerForm = true;
    this.isNewForm=false;
    this.newCustomer = customer;
    this.showDetails = false;
  }

  showAddCustomerForm(){
    //resets form if edited customer
    console.log(this.customers.length);
    if(this.customers.length){
      this.newCustomer = {};
    }
    this.customerForm = true;
    this.isNewForm = true;
    this.showDetails = false;
  }

  saveCustomer(customer:Customer){
      if(this.isNewForm){
        //add a new customer
        this.customersService.addCustomer(customer).subscribe(
          (data) => {
            console.log(data);
            this.fetchCustomers();
          }
        );
        this.showAddSuccess();
      }
      else{
        //update an existing customer
        this.customersService.updateCustomer(customer).toPromise()
        .then( () => {
          this.fetchCustomers();
        }
        );
        this.showEditSuccess();
      }
      this.customerForm = false;

  }

  removeCustomer(id){
    if(confirm("Are you sure?")){
    this.customersService.removeCustomer(id).toPromise()
    .then( () => {
         this.fetchCustomers();
       }
       );
       this.showDeleteSuccess();
      }
  }

  cancelAddEdit(){
    this.customerForm = false;
    this.fetchCustomers();
  }

  showAddSuccess() {
    this.toastr.success('Customer Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('Customer Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('Customer Deleted Successfully!!');
  }

  sortByCustomerName(a:Customer,b:Customer){
    if(a.name > b.name) return 1
      else if(a.name === b.name) return 0
      else return -1
  }
}
