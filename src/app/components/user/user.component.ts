import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user: any = false;

  constructor(private service: UsersService) { }

  signUp(){
    this.service.signUp('user', 'ale@gmail.com', 'pass').subscribe(response => this.user = response.user);;
  }

  signIn(){
    this.service.signIn('ale@gmail.com', 'pass').subscribe(response => this.user = response.user);;
  }
}
