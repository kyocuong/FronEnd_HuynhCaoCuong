import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../../../shared/drink.service';
import { Drink } from 'src/app/shared/drink';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private drinkService: DrinkService) {
  }
  Drinks: Drink[];
  ngOnInit() {
      this.drinkService.getDrinks().subscribe(
          list => {
              let array = list.map(item => {
                  return {
                      $key: item.key,
                      ...item.payload.val()
                  };
              });
              this.Drinks = array;
          });
  }

}
