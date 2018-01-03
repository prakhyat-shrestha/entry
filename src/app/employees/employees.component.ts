import { Component, OnInit } from '@angular/core';
import { Employee } from './employees';
import { EmployeesService } from './employees.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  employeeForm:boolean=false;
  isNewForm:boolean;
  showDetails:boolean=false;
  newEmployee:any={};

  constructor(private employeesService:EmployeesService,
                private toastr: ToastrService) { }

  ngOnInit() {
      this.fetchEmployees();
  }

  fetchEmployees(){
    this.employeesService.fetchEmployees().subscribe(
      (data) => this.employees = data );
  }

  showEmployeeDetails(Employee:Employee){
    if(!Employee){
      this.employeeForm = false;
      return;
    }
    this.employeeForm = true;
    this.isNewForm=false;
    this.newEmployee = Employee;
    this.showDetails = true;
  }

  showEditEmployeeForm(Employee:Employee){
    if(!Employee){
      this.employeeForm = false;
      return;
    }
    this.employeeForm = true;
    this.isNewForm=false;
    this.newEmployee = Employee;
    this.showDetails = false;
  }

  showAddEmployeeForm(){
    //resets form if edited Employee
    console.log(this.employees.length);
    if(this.employees.length){
      this.newEmployee = {};
    }
    this.employeeForm = true;
    this.isNewForm = true;
    this.showDetails = false;
  }

  saveEmployee(Employee:Employee){
      if(this.isNewForm){
        //add a new Employee
        this.employeesService.addEmployee(Employee).subscribe(
          (data) => {
            console.log(data);
            this.fetchEmployees();
          }
        );
        this.showAddSuccess();
      }
      else{
        //update an existing Employee
        this.employeesService.updateEmployee(Employee).toPromise()
        .then( () => {
          this.fetchEmployees();
        }
        );
        this.showEditSuccess();
      }
      this.employeeForm = false;

  }

  removeEmployee(id){
    if(confirm("Are you sure?")){
    this.employeesService.removeEmployee(id).toPromise()
    .then( () => {
         this.fetchEmployees();
       }
       );
       this.showDeleteSuccess();
      }
  }

  cancelAddEdit(){
    this.employeeForm = false;
    this.fetchEmployees();
  }

  showAddSuccess() {
    this.toastr.success('Employee Added Successfully!!');
  }
  showEditSuccess() {
    this.toastr.success('Employee Edited Successfully!!');
  }
  showDeleteSuccess() {
    this.toastr.success('Employee Deleted Successfully!!');
  }
}
