import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService 
{
users: User[];
user: User={
  firstName: '',
  lastName: '',
  email: ''
};

  constructor() {
    this.users = [
      {
        firstName: 'Kevin',
        lastName: 'Smith',
        email: 'kevin@gmail.com',
        registered: new Date('07/10/2015 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'john@gmail.com',
        registered: new Date('01/11/2014 07:50:00'),
        hide: true        
      },
      {
        firstName: 'Heila',
        lastName: 'Keith',
        email: 'heila@gmail.com',
        registered: new Date('04/08/2016 08:20:00'),
        hide: true
      }
    ];
   }

   getUsers()  :User[]{
     return this.users;
   }

   addUser(user: User){
     this.users.unshift(user);
   }

}
