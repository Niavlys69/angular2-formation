import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { State } from '../../../items/enums/state.enum';
import { Item } from '../../../items/interfaces/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormComponent implements OnInit {
  state = State;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  @Output() newItem: EventEmitter<Item> = new EventEmitter();

  constructor(private _Router: Router, private fb: FormBuilder) {
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.refCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
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
    // console.log(this.form.value);

    /*this.collection.push({

      Les 2 modes de valorisation ci-dessous fonctionnent

      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
      ---
      name: this.nameCtrl.value,
      reference: this.refCtrl.value,
      state: this.stateCtrl.value

    });*/

    this.newItem.emit({
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

  isError(champ: string): any {
    return this.form.get(champ).touched && this.form.get(champ).hasError('minlength');
    // return this.form.get(champ).touched && this.form.get(champ).invalid;
  }

}
