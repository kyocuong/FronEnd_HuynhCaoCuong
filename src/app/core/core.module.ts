import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { MaterialModule } from '../../app/material/material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DrinksComponent } from './components/drinks/drinks.component';
import { DrinkComponent } from './components/drinks/drink/drink.component';
import { DrinkListComponent } from './components//drinks/drink-list/drink-list.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { DrinkService } from '../shared/drink.service';
import { AuthService } from '../shared/auth.service';
import { ShoppingCartComponent } from './components/cart/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './components/cart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartListComponent } from './components/cart/shopping-cart-list/shopping-cart-list.component';
import { CartComponent } from './components/cart/cart.component';
@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DrinkService, AuthService, DatePipe],
  entryComponents: [DrinkComponent, MatConfirmDialogComponent],
  declarations: [CoreComponent,
    NavigationBarComponent,
    SidenavComponent,
    DrinksComponent,
    DrinkComponent,
    DrinkListComponent,
    LoginComponent,
    RegisterComponent,
    MatConfirmDialogComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingCartListComponent,
    CartComponent],
  exports: [NavigationBarComponent, SidenavComponent, DrinkComponent]

})
export class CoreModule { }
