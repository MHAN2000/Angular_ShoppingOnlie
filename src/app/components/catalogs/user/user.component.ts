import { Component } from '@angular/core';
import { IUser } from './types';
import { UserService } from './user.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';

interface IGenreOption {
  value: boolean | null,
  label: string,
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: IUser[] = [];
  userModal: boolean = false;
  user!: IUser;
  userForm: FormGroup;
  creating: boolean = true;
  genreOptions: IGenreOption[] = [
    {
      value: null,
      label: 'Choose an option'
    },
    {
      value: false,
      label: 'No'
    },
    {
      value: true,
      label: 'Yes',
    }
  ];

  constructor(
    private userService: UserService
  ) {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      genre: new FormControl(''),
    })
  }

  ngOnInit(): void {
    // Show a loading spinner
    Swal.showLoading();
    // Fetch Users from database
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      Swal.close();
    })
  }

  showCreatingModal(): void {
    this.user = {} as IUser;
    this.userModal = true;
    this.creating = true;

  }

  showEditingModal(user: IUser): void {
    this.user = user;
    this.userModal = true;
    this.creating = false;
  }

  async saveUser(user: IUser): Promise<void> {
    if (this.creating) {
      // Create user
      this.userService.addUser(this.userForm).subscribe(
        () => {
          // Add the just created user to the the users array
          this.users = [...this.users, user];
          // Close the modal
          this.userModal = false;
          Swal.fire('Success', 'The user has been added successfully', 'success');
        },
        err => Swal.fire('Error', `An error has ocurred, ${err}`, 'error'))
      return;
    }
    // Update user
    this.userService.updateUser(this.userForm, user.id).subscribe(
      (user) => {
        // Find index
        const index = this.users.findIndex(u => u.id === user.id);
        // Update the users array
        this.users[index] = user;
        // Close the modal
        this.userModal = false;
        Swal.fire('Success', 'The user has been updated successfully', 'success');
      }
    )
  }

  async deleteUser(id: number): Promise<void> {
    // Ask the user if he really wants to delete this record
    const userResponse = await Swal.fire({
      title: 'Do you want to delete this user?',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Yes, delete it',
      denyButtonText: 'No, cancel',
      allowOutsideClick: false
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
}
