import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageMissingComponent } from './page-missing/page-missing.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageMissingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageMissingComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
