import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportexcelComponent } from './importexcel/importexcel.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { ManagestockexchangesComponent } from './managestockexchanges/managestockexchanges.component';
import { ManageIPOComponent } from './manage-ipo/manage-ipo.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { AppRoutingModule } from './app-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UsersignupComponent,
    DashboardComponent,
    ImportexcelComponent,
    ManagecompaniesComponent,
    ManagestockexchangesComponent,
    ManageIPOComponent,
    UpdateProfileComponent,
    CompareCompanyComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
