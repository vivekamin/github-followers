import { Component } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'github-app',
  templateUrl: './github.component.html',
  providers: [GithubService]
})
export class GithubComponent  {

  followers:any;
  selected:any;
  username:string;
  count:number=1;
  flag:boolean = true;
  noUser:boolean = false;
  user:any;
  searchedUsers:any;

  constructor(private githubService:GithubService){


  }

  spotifySearch(){
    setTimeout(()=>{
      this.githubService.searchUser(this.username)
                        .subscribe((result)=>{

                          this.searchedUsers = [];
                          for(let item in result['items'] ){
                           this.searchedUsers.push(result['items'][item])
                           this.noUser = false;
                            // console.log(result['items'][item])
                          }


                          //console.log(this.searchedUsers)

                        },
                        (error)=>{
                          //console.log(error);
                          this.searchedUsers = null;
                        });
    }, 250)

  }
  search(user){
    //console.log(this.username);
    this.username = user;
    this.searchedUsers = null;
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
              this.searchedUsers = null;

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
      //console.log(followers)
      for(let f of followers){
        this.followers.push(f);
      }
      if(this.user['followers']<((this.count)*50)){
      this.flag = false;
      }
    },(error) =>{
      //console.log(error)
    });
  }

}
