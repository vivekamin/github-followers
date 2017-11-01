import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username = '';//AnoopJS8';
    private count=1;

    constructor(private _http:Http){
        console.log('Github Service init');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
          .map(res => res.json());
    }

    getFollowers(){
        return this._http.get('https://api.github.com/users/'+this.username+"/"+"followers?per_page=50")
          .map(res => res.json());
    }

    updateUsername(username:string){
      this.username=username;
    }

    updateCount(){
      this.count+=1;
    }
    getNextFollowers(){
      return this._http.get('https://api.github.com/users/'+this.username+"/"+"followers?per_page=50&page="+this.count)
        .map(res => res.json());
    }
}
