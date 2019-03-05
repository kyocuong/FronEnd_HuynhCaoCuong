import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Drink } from "./drink";
import * as _ from 'lodash';
import { CartState } from '../core/components/cart/CartState';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  drinkList: AngularFireList<any>;
  array = [];
  private cartSubject = new Subject<CartState>();
  drinksInCart: Drink[] = [];
  CartState = this.cartSubject.asObservable();
  constructor(private firebase: AngularFireDatabase) {
    this.drinkList = this.firebase.list('drinks');
    this.drinkList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    code: new FormControl('', Validators.required),
    drinkName: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    price: new FormControl('', Validators.required)
  });


  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      code: '',
      drinkName: '',
      imageUrl: '',
      price: 0,
    });
  }

  getDrinks() {
    this.drinkList = this.firebase.list('drinks');
    return this.drinkList.snapshotChanges();
  }

  addDrinkoCart(drink: any) {
    console.log('in service');
    this.drinksInCart.push(drink)
    this.cartSubject.next(<CartState>{ loaded: true, drinks: this.drinksInCart });
  }
  removeDrinkFromCart(code: string) {
    var drinkToFind = this.drinksInCart.find((_item) => _item.code === code);
    var index = this.drinksInCart.indexOf(drinkToFind);
    this.drinksInCart.splice(index, 1)
    this.cartSubject.next(<CartState>{ loaded: false, drinks: this.drinksInCart });
  }

  insertDrink(drink) {
    this.drinkList.push({
      code: drink.code,
      drinkName: drink.drinkName,
      imageUrl: drink.imageUrl ? drink.imageUrl : '',
      price: drink.price,
    });
  }

  updateDrink(drink) {
    this.drinkList.update(drink.$key,
      {
        code: drink.code,
        drinkName: drink.drinkName,
        imageUrl: drink.imageUrl ? drink.imageUrl : '',
        price: drink.price,
      });
  }

  deleteDrink($key: string) {
    this.drinkList.remove($key);
  }

  populateForm(drink) {
    this.form.setValue(_.omit(drink));
  }
}
