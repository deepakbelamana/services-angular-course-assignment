import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private counterService : CounterService) { }

  setUserToInActive(id : number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterService.incrementInActiveCounter();
  }

  setUserToActive(id : number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counterService.incrementActiveCounter()
  }
}
