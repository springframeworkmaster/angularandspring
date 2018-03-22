import { Person } from './../../models/Person';
import { PersonService } from './../../services/person.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-post-person',
  templateUrl: './post-person.component.html',
  styleUrls: ['./post-person.component.css']
})
export class PostPersonComponent implements OnInit {


  @Output() newPerson: EventEmitter<Person> = new EventEmitter();
  @Output() updatedPerson: EventEmitter<Person> = new EventEmitter();
  @Input() currentPerson: Person;
  @Input() isEdit: boolean;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  savePerson(firstName, lastName, email, phone, streetName, city, state, pincode){
    
    this.personService.savePerson({firstName,
                                 lastName,
                                 email, 
                                 phone, 
                                 address:{streetName, 
                                          city, 
                                          state, 
                                          pincode
                                }} as Person).subscribe(person => {
                                  this.newPerson.emit(person);
                                })  
  }
  
  updatePerson(){
    this.personService.updatePerson(this.currentPerson).subscribe(
      person => {
        console.log(person)
        this.isEdit = false;
        this.updatedPerson.emit(person);
      }
    );  
  }
}
