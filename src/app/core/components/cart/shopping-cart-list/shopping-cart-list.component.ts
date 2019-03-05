import { DrinkService } from '../../../../shared/drink.service';
import { Drink } from "../../../../shared/drink";
import { Component } from '@angular/core';
import { OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartState } from './../CartState';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {
  @Input() drinks: Drink[];
  loaded: boolean = true
  total = 0;
  drinkList: Drink[] = [];
  private subscription: Subscription;
  constructor(private service: DrinkService) { }
  ngOnInit() {
    // this.loaderService.show();
    this.subscription = this
      .service
      .CartState
      .subscribe((state: CartState) => {
        this.drinks = state.drinks;
        this.countTotal(this.drinks)
        console.log(this.drinks);
        console.log(this.total);
      });

  }
  countTotal(drinkList: Drink[]) {
    var drinks = {};
    for (var i = 0; i < drinkList.length; i++) {
      var drinkName= drinkList[i].drinkName;
      if (!drinks[drinkName]){
        drinks[drinkName]= [];
      }
      drinks[drinkName].push(drinkList[i].price);
    }
    var drinkCart= [];
    for (var drinkName in drinks) {
      drinkCart.push({drinkName: drinkName, price: drinks[drinkName]});
    }
    this.drinkList = drinkCart;
    this.total = 0;
    drinkCart.forEach(drink => {
      var drinkPriceTotal = drink.price[0] * drink.price.length;
      this.total += drinkPriceTotal;

    })
  }
  ngOnDestroy() {
    this
      .subscription
      .unsubscribe();
  }
}
