import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { AddExpenceComponent } from './home/manage-expences/add-expence/add-expence.component';
import { EditExpenceComponent } from './home/manage-expences/edit-expence/edit-expence.component';
import { AllExpenceesComponent } from './home/manage-expences/all-expencees/all-expencees.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { AddCategoryComponent } from './home/manage-categories/add-category/add-category.component';
import { AllCategoriesComponent } from './home/manage-categories/all-categories/all-categories.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { EditCategoryComponent } from './home/manage-categories/edit-category/edit-category.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TransformPipe } from './transform.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    HomeComponent,
    ManageExpencesComponent,
    AddExpenceComponent,
    EditExpenceComponent,
    AllExpenceesComponent,
    ManageCategoriesComponent,
    AddCategoryComponent,
    AllCategoriesComponent,
    ExpenceSummaryComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    EditCategoryComponent,
    TransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

