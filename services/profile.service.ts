
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  ;
  
 

  constructor(private http:HttpClient) {
    
   }
   getProfileInfo(username: string){
    return this.http.get("https://api.github.com/users/" + username  );
  }

}