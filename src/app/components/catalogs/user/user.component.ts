import { Component } from '@angular/core';
import { IUser } from './types';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: IUser[] = [];
  visible: boolean = false;
  genreOptions: string[] = ["M", "F"];

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    // Fetch Users from database
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  showDialog(): void {
    this.visible = true;
  }


}
