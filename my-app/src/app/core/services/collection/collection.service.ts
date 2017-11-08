import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../../items/interfaces/item.model';
import { State } from '../../../items/enums/state.enum';
import { ItemId } from '../../../items/interfaces/item-id.model';

@Injectable()
export class CollectionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  collection: Observable<ItemId[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.snapshotChanges().map(data => {
      return data.map(snap => {
        return {
          name: snap.payload.doc.data().name,
          reference: snap.payload.doc.data().reference,
          state: snap.payload.doc.data().state,
          id: snap.payload.doc.id
        };
      });
    });
    // this.collection = this.itemsCollection.valueChanges();
  }

  update(item: ItemId, newState: State): void {
    this.afs.doc<Item>('collection/' + item.id).update(item);
  }

  add(item: Item): void {
    this.itemsCollection.add(item);
  }

  delete(item: ItemId): void {
    this.afs.doc<Item>('collection/' + item.id).delete();
  }
}
