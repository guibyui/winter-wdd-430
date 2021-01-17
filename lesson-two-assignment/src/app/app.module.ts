import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

import { appComponent } from './app.component';

@NgModule({
  declarations: [
    appComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class appModule { }
