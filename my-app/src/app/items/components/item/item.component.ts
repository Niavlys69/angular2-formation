import { Component, OnInit, Input } from '@angular/core';

import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  state = State;
  @Input('item') item: ItemId;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() { }

  changeState(item: ItemId, newState: State): void {
    this._CollectionService.update(item, newState);
  }

  deleteItem(item: ItemId): void {
    this._CollectionService.delete(item);
  }

}
