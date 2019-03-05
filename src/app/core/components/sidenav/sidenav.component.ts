import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service'
interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  resourceRoutes: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'resource/drinks',
      title: 'Drink',
    },
    {
      icon: 'shopping_cart',
      route: 'resource/my-cart',
      title: 'My Cart',
    }
  ];

  manageRoutes: ROUTE[] = [
  ];

  constructor(private authService: AuthService) { }

}
