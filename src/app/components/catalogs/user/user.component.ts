import { Component } from '@angular/core';
import { IUser } from './types';
import { UserService } from './user.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: IUser[] = [];
  userCreatingModal: boolean = false;
  userEditingModal: boolean = false;
  user: IUser | undefined;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // Fetch Users from database
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  showCreatingModal(): void {
    this.userCreatingModal = true;
  }

  showEditingModal(id: number): void {
    Swal.showLoading();
    // Fetch user by id
    this.userService.getUser(id).subscribe(user => {
      Swal.close();
      this.user = user;
      this.userEditingModal = true;
    });
  }

  async deleteUser(id: number): Promise<void> {
    // Ask the user if he really wants to delete this record
    const userResponse = await Swal.fire({
      title: 'Do you want to delete this user?',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Yes, delete it',
      denyButtonText: 'No, cancel'
    });
    // If the user clicked 'No, cancel', exit method
    if (userResponse.isDenied) return;
    // If the user clicked on 'Yes, delete it' send the request to the backend
    this.userService.deleteUser(id).subscribe(user => {
      this.users = this.users.filter(user => user.id !== id);
      Swal.fire({
        title: 'Success',
        text: 'This user has been successfully deleted',
        icon: 'success'
      });
    });


    
  }

  // addUser(): void {
  //   this.userService.addUser(this.userForm).subscribe(user => {
  //     Swal.fire({
  //       title: 'Success',
  //       text: 'The user has been added successfully',
  //       icon: 'success'
  //     });
  //     // Append the created user to the users array
  //     this.users = [...this.users, user];
  //   }, error => {
  //     console.log('An error has ocurred');
  //   })
  // }


}
