import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRouteGuard } from './login-route-guard';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { QuoteComponent } from './quote/quote.component';
import { SignInComponent } from './sign-in/sign-in.component'
import {RegisterComponent} from './register/register.component'
import {OwnershipCostComponent} from './ownership-cost/ownership-cost.component'
import {OwnershipCostFinalComponent} from './ownership-cost-final/ownership-cost-final.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [LoginRouteGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'quote',
        component: QuoteComponent,
      },
      {
        path: 'ownership-cost',
        component: OwnershipCostComponent,
      },
      {
        path: 'ownership-cost-final',
        component: OwnershipCostFinalComponent,
      },
    ]
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
