import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-mock',
  templateUrl: './card-mock.component.html',
  styleUrls: ['./card-mock.component.scss']
})
export class CardMockComponent implements OnInit {
  @Input() mock: {name: string};
  constructor() { }

  ngOnInit() {
  }

}
