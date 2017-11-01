import { Component } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  providers: [GithubService]
})
export class GithubComponent  {
  user:any;
  followers:any;
  username:string;
  count:number=0;

  constructor(private githubService:GithubService){
    console.log('Github Component init');

  }

  search(){
    //console.log(this.username);
    this.githubService.updateUsername(this.username);
    this.githubService.getUser().subscribe(user => {
      //console.log(user);
      this.user = user;
    });

    this.githubService.getFollowers().subscribe(followers => {
      //console.log(followers);
      this.followers = followers;
    });
  }

  searchNextLoad(){
    this.githubService.updateCount();
    this.githubService.getNextFollowers().subscribe(followers => {
      //console.log(followers);
      this.followers = followers;
    });
  }

}
