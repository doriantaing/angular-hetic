import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styles: []
})
export class CustomersCardComponent implements OnInit {

  @Input() customers: any;

  constructor() { }

  ngOnInit() {
  }

}
