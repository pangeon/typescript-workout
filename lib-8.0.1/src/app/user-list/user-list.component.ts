import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from '../user.service';

@Component({
  selector: 'user-list',
  template: `
  <ul>
    <li *ngFor="let user of (users$ | async)">{{ user.name }}</li>
  </ul>
  `
})
export class UserListComponent {
  readonly users$: Observable<User[]>;

  constructor(private usersService: UserService) {
    this.users$ = usersService.getUsers();
  }
  
}
