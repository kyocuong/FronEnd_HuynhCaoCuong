import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service'
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent  {
  @Output() toggleSidenav = new EventEmitter<void>();
  profileEmail: string;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.profileEmail = user.email;    
  }
  logout() {
    this.authService.doLogout();
    this.router.navigate(['login']);
  }
}
