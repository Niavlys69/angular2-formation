import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { State } from '../../../items/enums/state.enum';

@Directive({
  selector: '[appState]'
})

export class StateDirective implements OnChanges {
  @Input('appState') appState: State;
  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) { }

  ngOnChanges(): void {
    const cssClass = `state-${this.appState}`;
    const elementNode = this._ElementRef.nativeElement;
    let text: string;
    switch (this.appState) {
      case State.ALIVRER:
        text = 'A LIVRER';
        break;
      case State.ENCOURS:
        text = 'EN COURS DE LIVRAISON';
        break;
      case State.LIVREE:
        text = 'LIVREE';
        break;
      default:
        console.log(this.appState);
        break;
    }

    // Add class on elementNode
    this._Renderer2.addClass(elementNode, cssClass);
    // Change HTML content in elementNode
    elementNode.innerHTML = text;
  }

}
