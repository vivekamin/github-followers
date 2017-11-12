import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username = '';
    private count=1;
    private tempu='';


    constructor(private _http:Http){

    }
    searchUser(username){
      this.username = username
      return this._http.get('https://api.github.com/search/users?q='+this.username+'&sort' )
        .map(res => res.json());
    }

    getUser(username){
      this.count = 1;
      this.tempu = username;
        return this._http.get('https://api.github.com/users/'+this.tempu )
          .map(res => res.json());
    }

    getFollowers(){
        return this._http.get('https://api.github.com/users/'+this.tempu+"/"+"followers?per_page=50")
          .map(res => res.json());
    }


    loadMore(){
      this.count+=1;
      return this._http.get('https://api.github.com/users/'+this.tempu+"/"+"followers?per_page=50&page="+this.count)
        .map(res => res.json());
    }



}
