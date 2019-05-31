import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageMissingComponent } from './page-missing/page-missing.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CategoriesComponent } from './categories/categories.component';
import { PubliezAnnonceComponent } from './publiez-annonce/publiez-annonce.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'nous-contacter', component: NousContacterComponent },
  { path: 'publiez-annonce', component: PubliezAnnonceComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: PageMissingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageMissingComponent,
    AccueilComponent,
    CategoriesComponent,
    PubliezAnnonceComponent,
    NousContacterComponent,
    MainNavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ), LayoutModule, MatSidenavModule, MatIconModule, MatListModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
