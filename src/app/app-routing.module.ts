import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AllCategoriesComponent } from './home/manage-categories/all-categories/all-categories.component';
import { AddCategoryComponent } from './home/manage-categories/add-category/add-category.component';
import { EditCategoryComponent } from './home/manage-categories/edit-category/edit-category.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AllExpenceesComponent } from './home/manage-expences/all-expencees/all-expencees.component';
import { AddExpenceComponent } from './home/manage-expences/add-expence/add-expence.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';


const routes: Routes = [
  {path:"auth",
  component:AuthComponent,
  children:[
    {path:"",component:SigninComponent},
    {path:"signin",component:SigninComponent},
    {path:"signup",component:SignupComponent},
    {path:"reset",component:ResetPasswordComponent}
  ]
  },
  {path:"home",component:HomeComponent,canActivate:[AuthGuardService],
  children:[
    {path:"",component:DashboardComponent},
    {path:"expence-summary",component:ExpenceSummaryComponent},
    {path:"manage-expence",component:ManageExpencesComponent,children:[
      {path:"",component:AllExpenceesComponent},
      {path:"add-expence",component:AddExpenceComponent}
    ]},
    {path:"manage-category",component:ManageCategoriesComponent,children:[
      {path:"",component:AllCategoriesComponent},
      {path:"add-category",component:AddCategoryComponent},
      {path:"edit-category/:id",component:EditCategoryComponent},
    ]}
  ]},
  {path: '',  redirectTo: '/home',  pathMatch: 'full'},
  {path:"**",component:AuthComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
