import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../types';

interface IGenreOption {
  value: boolean | null,
  label: string,
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  userForm: FormGroup;
  @Input() user: IUser | undefined;
  selectedGenre: boolean = true;
  // @Input
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

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      genre: new FormControl('')
    });
  }
}
