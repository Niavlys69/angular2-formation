import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(private _Router: Router, private fb: FormBuilder) {
    this.nameCtrl = fb.control('');
    this.refCtrl = fb.control('');
    this.stateCtrl = fb.control(this.state.ALIVRER);

    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {
  }

  process() {
    console.log(this.form.value);
    this.collection.push({
      /*
      Les 2 modes de valorisation ci-dessous fonctionnent

      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
      */
      name: this.nameCtrl.value,
      reference: this.refCtrl.value,
      state: this.stateCtrl.value
    });

    this.reset();
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(this.state.ALIVRER);
  }

}
