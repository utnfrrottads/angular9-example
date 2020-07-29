import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate() {
    setTimeout(()=> this.router.navigate(['ruta2']) , 2000);
  }

}
