import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };

  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.users = this.dataService.getUsers();
    this.loaded = true;
  }

 /*  addUser(){
    this.user.registered = new Date;
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
  } */
  
  onSubmit({value,valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('Form is not valid');
    } else{
      value.registered = new Date();
      value.hide=true;

      this.dataService.addUser(value);
      //this.users.unshift(value);

      this.form.reset();

    }
  }

  }


