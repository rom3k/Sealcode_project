import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { HTTPService } from './http.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TalkPreviewComponent } from './talk-preview/talk-preview.component';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'sign-up', component: SignUpComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: '**', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    TalkPreviewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HTTPService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
