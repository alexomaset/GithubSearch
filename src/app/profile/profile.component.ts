import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {profileService} from '../profile.service'
import {Repository} from '../repository';
import {User} from '../user'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class profileComponent implements OnInit {

    profile:any;
    username: string;
    repos:any;
  constructor(private profileService: profileService) {
   }
   findProfile(){
    
    this.profileService.getProfileInfo(this.username).subscribe(github => {
      this.profile = github;
      });

  


  }  

  ngOnInit() {
  }

}