import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, WelcomeMessageComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
