import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { Person } from '../models/Person';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PersonService {
  postUrl: string = 'api/persons';
  
  constructor( private http: HttpClient) { }

  getPersons() : Observable<Person[]> {
    return this.http.get<Person[]>('api/persons');
  }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>('api/persons', person, httpOptions);

  }

  updatePerson(person: Person) :Observable<Person> {
    const url = `${this.postUrl}/${person.id}`;
    return this.http.put<Person>(url,person,httpOptions)
  }

  removePerson(person: Person | number): Observable<Person>{
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.postUrl}/${id}`; 
    return this.http.delete<Person>(url,httpOptions);
  }


}
