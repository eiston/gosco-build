import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';


// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from './auth.service';
import {FormsModule} from '@angular/forms';
import {LoginRouteGuard} from './login-route-guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { QuoteComponent } from './quote/quote.component';
import { OwnershipCostComponent } from './ownership-cost/ownership-cost.component';
import { OwnershipCostFinalComponent } from './ownership-cost-final/ownership-cost-final.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyBiqXIaSad119OT8esJHGxxSOkMx8cBJA0',
  authDomain: 'gosco-web.firebaseapp.com',
  databaseURL: 'https://gosco-web.firebaseio.com',
  projectId: 'gosco-web',
  storageBucket: 'gosco-web.appspot.com',
  messagingSenderId: '491320634555'
};


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    SignInComponent,
    RegisterComponent,
    QuoteComponent,
    OwnershipCostComponent,
    OwnershipCostFinalComponent
  ],
  providers: [AuthService,
    AngularFireDatabase,
    LoginRouteGuard,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
