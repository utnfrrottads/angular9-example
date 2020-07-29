import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  identifier = 'Nada';
  ngOnInit(): void {
    this.identifier = this.route.snapshot.params.identificador;
    }

}
