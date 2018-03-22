
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { FormStyle } from '@angular/common';
import { DataService } from './services/data.service';
import { PersonService } from './services/person.service';
import { PersonComponent } from './components/person/person.component';
import { PostPersonComponent } from './components/post-person/post-person.component';
import { UltimateComponent } from './components/ultimate/ultimate.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    PersonComponent,
    PostPersonComponent,
    UltimateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
