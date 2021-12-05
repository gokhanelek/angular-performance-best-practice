import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  $users = new Observable<User[]>();

  constructor(private usersService: UsersService) {
    this.$users = this.usersService.getUsers();
  }

  ngOnInit(): void { }

  trackByFn(index: number, user: User): number {
    return user.id;
  }

}
