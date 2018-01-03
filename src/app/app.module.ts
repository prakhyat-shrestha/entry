import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { TodoComponent } from './todo/todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomersComponent } from './customers/customers.component'
import { CustomersService } from './customers/customers.service';
import { RepairsComponent } from './repairs/repairs.component';
import { RepairsService } from './repairs/repairs.service';
import { StatesComponent } from './states/states.component';
import { StatesService } from './states/states.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { BrandsComponent } from './brands/brands.component';
import { BrandsService } from './brands/brands.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './employees/employees.service';
import { ModelsComponent } from './models/models.component';
import { ModelsService } from './models/models.service';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipmentsService } from './equipments/equipments.service';

import {DateTimePickerModule} from 'ng-pick-datetime';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/details.service';

import { NgxPaginationModule } from 'ngx-pagination';
import {FilterPipe} from './pipes'

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    
  },
  {
    path: 'customers',
    canActivate: [AuthGuard],
    component: CustomersComponent
  },
  {
    path: 'states',
    canActivate: [AuthGuard],
    component: StatesComponent
  },
  {
    path: 'brands',
    canActivate: [AuthGuard],
    component: BrandsComponent
  },
  {
    path: 'equipments',
    canActivate: [AuthGuard],
    component: EquipmentsComponent
  },
  {
    path: 'employees',
    canActivate: [AuthGuard],
    component: EmployeesComponent
  },
  {
    path: 'models',
    canActivate: [AuthGuard],
    component: ModelsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TodoComponent,
    HeaderComponent,
    LoginFormComponent,
    DashboardComponent,
    NavigationComponent,
    CustomersComponent,
    RepairsComponent,
    StatesComponent,
    BrandsComponent,
    EmployeesComponent,
    ModelsComponent,
    EquipmentsComponent,
    DetailsComponent,

    
    
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    DateTimePickerModule,
    NgxPaginationModule
  ],
  providers: [MyDataService,
              UserService, 
              AuthGuard,
              CustomersService,
              RepairsService,
              StatesService,
              BrandsService,
              EmployeesService,
              ModelsService,
              EquipmentsService,
              DetailsService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
