imimport { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubsearchService} from '../profile.service'
import {Repository} from '../repository';
import {User} from '../user'


@Component({
  selector: 'app-githubsearch',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class GithubsearchComponent implements OnInit {

    profile:any;
    username: string;
    repos:any;
  constructor(private GithubsearchService: GithubsearchService) {
   }
   findProfile(){
    
    this.GithubsearchService.getProfileInfo(this.username).subscribe(github => {
      this.profile = github;
      });

  


  }  

  ngOnInit() {
  }

}