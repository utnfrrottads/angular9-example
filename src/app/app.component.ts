import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'ng-peti';
  token = '';

  constructor(
    private storage: LocalStorageService,
    private router: Router
    ){}

  ngOnChanges(){
    this.token = this.storage.getAuthentication();
  }

  logOut(){
    this.storage.logOut();
    this.token = undefined;
    this.router.navigate(['login']);
  }

  onLoggingIn(token){
    this.token = token;
  }
}
