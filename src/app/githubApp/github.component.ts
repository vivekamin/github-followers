import { Component } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'github-app',
  templateUrl: './github.component.html',
  providers: [GithubService]
})
export class GithubComponent  {

  followers:any;
  username:string;
  count:number=1;
  flag:boolean = true;
  noUser:boolean = false;
  user:any;

  constructor(private githubService:GithubService){


  }

  search(){
    //console.log(this.username);
    if(this.username){
              this.count = 1;
              this.flag = true;
              this.githubService.getUser(this.username)
                                .subscribe((user) => {
                                this.noUser = false;
                                //console.log(user);
                                this.user = user;

                                if(this.user['followers']<((this.count)*50)){
                                this.flag = false;
                                }
                                this.githubService.getFollowers()
                                                  .subscribe((followers) => {
                                                    //console.log(followers);
                                                    this.followers = followers;
                                                  },
                                                  (error) =>{
                                                    //console.log(error);
                                                    this.reset();
                                                  });
              },
            (error) =>{
              //console.log(error)
              this.noUser = true;
              this.reset();

            });


            }
  else{
      alert("Please Enter Github username");
  }
  }


  reset()
  {
    this.user = '';
    this.followers = [];
    this.count=1;
    this.flag= true;

  }

  loadMoreFollowers(){

    //console.log(this.user['followers']);
    this.count+=1;
    this.githubService.loadMore().subscribe((followers) => {
      this.followers = followers;
      if(this.user['followers']<((this.count)*50)){
      this.flag = false;
      }
    },(error) =>{
      //console.log(error)
    });
  }

}
