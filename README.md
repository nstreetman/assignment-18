#Intro to Routing and Views with Data

##Objectives

Effectively implement the promise pattern for fetching data asynchronously.
Format retrieved data into HTML
Primary objective is routing + fetching + rendering data to page. Styles are of secondary importance.
Use window.location.hash and an event-listener on the hashchange event to implement client-side routing.
Implement UI-logic that changes the hash base on user interactions.
##Setup

use the (simple-build-scss-scss)[https://github.com/t3tools/simple-build-es6-scss] tool to create a new web project. (Instructions in the link)
cd into the project
npm install to install project dependencies
npm start to start the watcher
import jQuery into your app.js
hack away at your app.js to create the u.i. below.
it is highly recommended that you use bootstrap for the grid and the table styles.
##Resources

Iceland API Documentation: http://docs.apis.is/
no API key necessary
###Normal Mode

Implement hash routing to render the UI
##Roadmap to Success

Build a router function that will render a simple view in the #app-container element based on what is in the hash.
Have your router execute a $.getJSON(...) request that fetches data from the appropriate URL endpoint
In your promise handler, iterate over the data and render something simple to the page $.getJSON.then(...)
Build static-HTML with dummy data for a given route to make sure the layout is operational.
Create the HTML dynamically based on the data returned from the server -- this will certainly require iterating over some array of objects returned by the API server.
Put event-listeners on the nav-button elements to highlight and show which route is active. You will need to implement the DOM logic that applies the correct class-names for when
(A) the application starts
(B) a user navigates by clicking a button



  
