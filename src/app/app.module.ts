
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {profileService} from './profile.service';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { profileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    profileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [profileService],
  bootstrap: [AppComponent]
})
export class AppModule { }