import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { State } from '../../../items/enums/state.enum';
import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../items/interfaces/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  state = State;
  collection = COLLECTION;
  newItem: Item;

  constructor(private _Router: Router) { }

  ngOnInit() {
    this.newItem = {
      name: '',
      reference: '',
      state: this.state.ALIVRER
    };
  }

  process() {
    this.collection.push(this.newItem);
    this._Router.navigate(['list']);
  }

}
