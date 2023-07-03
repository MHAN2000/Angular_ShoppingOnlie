import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './types';
import { FormGroup } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/user');
  }

  addUser(form: FormGroup): Observable<IUser> {
    return this.http.post<IUser>('/api/user', form.value, httpOptions);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`/api/user/${id}`);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`/api/user/${id}`);
  }
}
