import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-peti';
  token = '';

  constructor(private storage: LocalStorageService){}

  ngOnInit(){
    this.token = this.storage.getAuthentication();
  }
}
