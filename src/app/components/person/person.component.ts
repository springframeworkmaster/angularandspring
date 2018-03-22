import { Person } from './../../models/Person';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];
  currentPerson: Person = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
        id: 0,
        streetName: '',
        city: '',
        state: '',
        pincode: 0
    }
  }

  isEdit: boolean = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPersons().subscribe(persons => {
      console.log(persons);
      this.persons=persons;
    })
  }

  onNewPerson(person: Person){
    this.persons.unshift(person);
  }

  onUpdatedPerson(person: Person){
    this.persons.forEach((cur,index) => {
      if(person.id === cur.id){
        this.persons.splice(index, 1);
        this.persons.unshift(person);
        this.isEdit= false;
        this.currentPerson = {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: {
              id: 0,
              streetName: '',
              city: '',
              state: '',
              pincode: 0
          }
        }
      }
    });
  }

  editPerson(person: Person){
    this.currentPerson = person;
    this.isEdit=true;
  }

  removePerson(person: Person){

    if(confirm('Are you sure?')){
      this.personService.removePerson(person.id).subscribe(()=>{
        this.persons.forEach((cur,index) => {
          if(person.id === cur.id){
            this.persons.splice(index, 1);
           
          }
        });


      });
    }
    

  }
}
