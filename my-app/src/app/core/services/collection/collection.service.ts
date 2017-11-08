import { Injectable } from '@angular/core';

import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../items/interfaces/item.model';
import { State } from '../../../items/enums/state.enum';

@Injectable()
export class CollectionService {
  collection: Item[] = COLLECTION;
  constructor() { }

  update(item: Item, newState: State): void {
    item.state = newState;
  }

  add(item: Item): void {
    this.collection.push(item);
  }

  delete(item: Item): void {

  }
}
