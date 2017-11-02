## Problem
Create a service that allows for a user to search for a GitHub username. On a successful search return, display the user's GitHub handle, follower count, and a list of the user's followers (just the avatar is fine). Since some users (e.g. gaearon, holman, etc.) have many thousands of followers, GitHub only returns a portion of the followers with each request. Create a "load more" button that, when clicked, fetches the next payload of followers. This button should persist until there are no more pages of followers to fetch.

## Solution
Developed Angular application to consume Github RESTful API. Deployed application on heroku using express.js as dependency.

After searching for user,on single hit GithHub API will provide 50 result of followers.So to load more result I have to use pagination. I have implemeted paginaton using a count and page number. However I am not saving data from every hit. So at a time a user will be able to see 50 followers only.
The 'LoadMore' button will be disabled if there are no more followers to display.

The response of API calls has been handled using RxJS operators. Used Observables to handle steam data.

Day-1(Understading Github API flow, Learnt Heroku)

Day-2(Developed Angular App, Deployed it)



## Technology Stack
Angular,BootStrap v3, HTML, Heroku & node.js(for deployement).

## Why Angular
Because I have pretty good experience with both Angular JS & Angular(2+). $scope was the worst thing with AngularJS. But Since the architecture of whole framework changed and they included most things required to consume RESRful APIs, it has become powerful and efficient. The concept of component-wise application is also a reason, I chose Angular. however the challenge require only one major module to develop. So I did't get chance to use routing,routeGuards ,lifeCycle hooks and AngularModule.
After creating framework of application in Angular. It is fast to develop a simple to complex application. And it is easily scalable, If the architecture of application has been developed feature-wise.

## Files Coded
src -> app -> githubApp(All Files)

src -> app -> service(All Files)

src -> app -> app.component.html

src -> styles.css

## Not Implemeted
Because of time constraint with busy university scheduling, I didn't get time to revise Karma & Jasmin. As a result I have not implemeted Automated testing in this application.

## Deployement(Demo)
I have hosted the application on heroku [here](https://githubfollower.herokuapp.com/)

## My LinkedIn Profile
[LinkedIn](https://www.linkedin.com/in/vivek-amin/)





