import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'ng-peti';
  token = '';

  constructor(
    private storage: LocalStorageService,
    private router: Router
    ){}

  ngOnInit(){
    this.token = this.storage.getAuthentication();
  }

  ngDoCheck(){
    this.token = this.storage.getAuthentication();  // has delay in updating header, but update it without refresh page (routing)
  }

  logOut(){
    this.storage.logOut();
    this.token = undefined;
    this.router.navigate(['login']);
  }
}
