import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  state = State;
  @Input('item') item: Item;
  constructor() { }

  ngOnInit() {
  }

  changeState(item: Item, newState: State): void {
    item.state = newState;
  }

}
