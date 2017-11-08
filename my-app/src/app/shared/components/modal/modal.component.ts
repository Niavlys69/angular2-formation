import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {
  @Input() msg;
  @Input() route;
  constructor(public activeModal: NgbActiveModal, private _Router: Router) { }

  ngOnDestroy() {
    this._Router.navigate([this.route]);
  }

}
