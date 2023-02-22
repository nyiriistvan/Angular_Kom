import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  onButton() {
    throw new Error('Method not implemented.');
  }
  event = new EventEmitter();
  constructor() { }

  onButtonClick(){
    this.event.emit();
  }
}
