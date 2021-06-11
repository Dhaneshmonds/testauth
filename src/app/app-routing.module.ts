import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { ProfileComponent } from './profile/profile.component';
import { CompanyComponent } from './company/company.component';
import { DefaultComponent } from './default/default.component';
import { CallbackauthComponent } from './callbackauth/callbackauth.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
    // ,
    // canActivate: [
    //   MsalGuard
    // ]
  },
  {
    path: 'callbackauth',
    component: MsalRedirectComponent
    // ,
    // canActivate: [
    //   MsalGuard
    // ]
  },
  {
    path:'TestQAManual6',
    component: CompanyComponent
    // ,
    // canActivate: [
    //   MsalGuard
    // ]
  }
  ,
  {
    // Needed for hash routing
    path: 'code',
    component: HomeComponent
  },
  {
    path: '',
    component: DefaultComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    // Don't perform initial navigation in iframes
    // enableTracing: true ,
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
