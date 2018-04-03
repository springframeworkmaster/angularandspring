
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { RouterModule, Router } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormStyle } from '@angular/common';
import { DataService } from './services/data.service';
import { PersonService } from './services/person.service';
import { PersonComponent } from './components/person/person.component';
import { PostPersonComponent } from './components/post-person/post-person.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { DatatableComponent } from './components/datatable/datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonComponent,
    PostPersonComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    RouterModule.forRoot([
      {  path: 'person', component: PersonComponent},
      {  path: 'data-table', component: DatatableComponent},
      { path: 'post-person', component: PostPersonComponent}
    ])
  ],
  exports: [
    MatTableModule
  ],
  providers: [DataService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
