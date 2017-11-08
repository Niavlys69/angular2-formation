import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListItemsComponent implements OnInit {
  collection: Observable<ItemId[]>;
  state = State;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

}
