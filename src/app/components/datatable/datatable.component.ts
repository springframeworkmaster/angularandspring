import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from './../../models/Person';
import { PersonService } from './../../services/person.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  displayedColumns = ['firstName','lastName', 'email', 'phone', 'streetName', 'city', 'state', 'pincode' ];
  dataSource = new MatTableDataSource<Person>();

  persons: Person[];
 
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPersons().subscribe(persons => {
      console.log(persons);
      this.dataSource.data=persons;
      //this.persons=persons;
    });
   // this.dataSource.data=this.persons;
  }

}

