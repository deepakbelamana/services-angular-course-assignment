import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService : UsersService) {

  }
  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setUserToInActive(id)
  }
}
