import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username = '';
    private count=1;


    constructor(private _http:Http){

    }

    getUser(username){
      this.count = 1;
      this.username = username;
        return this._http.get('https://api.github.com/users/'+this.username, this.params())
          .map(res => res.json());
    }

    getFollowers(){
        return this._http.get('https://api.github.com/users/'+this.username+"/"+"followers?per_page=50",this.params())
          .map(res => res.json());
    }


    loadMore(){
      this.count+=1;
      return this._http.get('https://api.github.com/users/'+this.username+"/"+"followers?per_page=50&page="+this.count,this.params())
        .map(res => res.json());
    }

    private params() {
        // create authorization header with jwt token
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', 'd8d1c4270b43ad10e691');
        params.set('client_secret', 'df227a9d8d339bcfb8a90afad71f9b2b4e59984d');
            return new RequestOptions({ search: params });
        }

}
