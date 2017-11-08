import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';

import { Item } from '../../interfaces/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _CollectionService: CollectionService, private modalService: NgbModal) { }

  ngOnInit() { }

  addItem(item: Item) {
    this._CollectionService.add(item);
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Commande créée';
    modalRef.componentInstance.route = '/items/list';
  }

}
