import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'http://dummyjson.com/users';
  constructor(private _http: HttpClient) { }

  getAllUsers(){
    return this.http.get(this.url);
  }

  getUserBySearch(seatchText:string){
    return this._http.get(this.url + "/search?q=" + searchText)

  }

}
