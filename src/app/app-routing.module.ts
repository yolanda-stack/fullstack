import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ImportexcelComponent } from './importexcel/importexcel.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { ManagestockexchangesComponent } from './managestockexchanges/managestockexchanges.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ManageIPOComponent } from './manage-ipo/manage-ipo.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';

const routes: Routes = [
  { path: 'userlogin', component: UserloginComponent },
  { path: 'usersignup', component: UsersignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
  { path: 'importexcel', component: ImportexcelComponent },
  { path: 'managecompanies', component: ManagecompaniesComponent },
  { path: 'managestockexchange', component: ManagestockexchangesComponent },
  { path: 'updateprofile', component: UpdateProfileComponent },
  { path: 'manageipo', component: ManageIPOComponent },
  { path: 'comparecompany', component: CompareCompanyComponent },

  { path: '', redirectTo: '/userlogin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }