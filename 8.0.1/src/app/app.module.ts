import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { UsersListComponent } from './user-list/user-list.component';
import { UsersService } from './user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiHttpInterceptor } from './interceptors/api-http-interceptor';

@NgModule({
  declarations: [AppComponent, WelcomeMessageComponent, UsersListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UsersService, {provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
