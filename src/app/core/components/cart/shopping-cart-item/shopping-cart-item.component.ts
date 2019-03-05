import {DrinkService} from '../../../../shared/drink.service';
import {Component, Input} from '@angular/core';
import { Drink } from "../../../../shared/drink";
@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {

  @Input() drink: Drink;
  constructor(private service: DrinkService) { }
  AddDrink(_drink: Drink) {
    _drink.added = true;
    this
      .service
      .addDrinkoCart(_drink);
  }
  RemoveDrink(_drink: Drink) {
    _drink.added = false;
    this
      .service
      .removeDrinkFromCart(_drink.code);
  }


}
