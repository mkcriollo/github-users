# GitHub Users

[Github Users](https://mk-github-users.netlify.app/login) is the home to quickly access visual data of any github user. Quickly be able to view the github user most used languages, most popular repos, most forked repos etc.
All data is presented in graphs for better vizualization. View a user card with that github user's info, as well be able to view a follwoing card which displays that users followers.

## Table of Contents
* [Built With](#built-with)
* [Features](#features)
* [To-do](#to-do)

## Built With: 

- JavaScript 
- React 
- Auth0
- Github API
- Fusion Charts 
- Netlify

## Features 

#### Users Authentification 

Users will be able to login in with their own Account or use social platforms to login in. (google,github,gmail)

![GU-Auth](https://media.giphy.com/media/KaZmgHlxikMrlhCpBO/giphy.gif)

#### Github API Query

Users will be able to search for a github user using name or username and be able to recieve back data on that user.

- Display Error when user is not found
- Has a request count, When request reaches 0 the users wont be able to search for another user until request are replinished.

![GU-Search](https://media.giphy.com/media/ukrZ9EqOelV7ZDmvhB/giphy.gif)

#### Fusion Charts 

Github Search User's data will be display in charts, allowing the user to receive a better user experience and better vizualization of the data. These graphs are valuable in situations where you want to understand changes or trends over time. 

![GU-Charts](https://media.giphy.com/media/cXdJSFMJRhInDpMVkL/giphy.gif)

## To-do

- Have a light mode and dark mode option.
- Have a quick copy and paste feature. (Allowing users to look at the followers and quickly be able to get any user username and search)
- Create a summary displaying a quick summary on your coding experience.
