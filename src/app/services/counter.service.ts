import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeActionEmitter = new EventEmitter<number>;
  inactiveActionEmitter = new EventEmitter<number>;
  activeActions :number=0
  inactiveActions : number=0

  constructor() { }

  incrementActiveCounter () {
    this.activeActions=this.activeActions+1;
    this.activeActionEmitter.emit(this.activeActions);
  }

  incrementInActiveCounter() {
      this.inactiveActions= this.inactiveActions+1;
      this.inactiveActionEmitter.emit(this.inactiveActions);
  }
}
