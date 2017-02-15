function forEach(arr, cb){
	for(var i = 0; i < arr.length; i++){
		cb(arr[i], i, arr)
	}
}

import $ from 'jquery'

//modeled almost exactly after the routing warmup demo did by Travis 02/11, utilized the pushing to tables warmup also

var pageContentObj = {
	home:  `
				<table class =“table table-home”>
				  <thead>
				    <tr><th><h3>The Basic Facts</h3></th> </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>Native Name:</td>
				      <td>Island</td>
				    </tr>
				    <tr>
				      <td>Demonym:</td>
				      <td>Icelander</td>
				    </tr>
				    <tr>
				      <td>Area (m2):</td>
				      <td>103000</td>
				    </tr>
				    <tr>
				      <td>Calling Code:</td>
				      <td>352</td>
				    </tr>
				  </tbody>
				</table>
					`,

	concerts: 'asdf',
	carpools: `
			<table class =“table table-carpools”>

				<thead>
					<tr><h2>Carpools</h2></tr>
				</thead>
				<tbody>
				<tr>
					<td>Coming Soon!</td>

				</tr>
				</tbody>

				</table>	`,

	flights:  `
				<table class =“table table-flights”>

				<thead>
					<tr><h2>Flights</h2></tr>
				</thead>
				<tbody>
				<tr>
					<td>Coming Soon!</td>

				</tr>
				</tbody>

				</table>
			`
}

var tabsContainerEl = document.querySelector(".nav-tabs")

function renderActiveTab(theCurrentRoute){
	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]')
	previousActiveTabEl.classList.remove('active')

	var currentActiveTabEl = document.querySelector(`[data-route="${theCurrentRoute}"]`)
	currentActiveTabEl.classList.add('active')
}

function renderContentTo(domEl, theRoute, theContent){

	console.log(theRoute)
	if( theRoute === 'home' ){  return domEl.innerHTML = theContent[theRoute] }

	if( theRoute === 'concerts' ){
		console.log(theRoute)
		$.getJSON('http://apis.is/concerts')
			.then(function(serverRes){
				var htmlStr = `<div class="title-div">
												<h1>Concerts</h1>
											</div>
				`
				serverRes.results.forEach (function (singleObj){
					console.log(singleObj)
					// htmlStr += `<div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4>
							htmlStr
							htmlStr += `<div class="concert-image"><img src="${singleObj.imageSource}"></div>`
							htmlStr += `<div class ="concert-name">${singleObj.name}</div>`
							htmlStr += `<div class="concert-venue"><span class="venue-name">Venue: </span>${singleObj.eventHallName}</div>`
							htmlStr += `<div class="concert-date">"${singleObj.dateOfShow}"</div>`
											// </div>`
										})



				concertContainerEl.innerHTML = htmlStr
		})


				var concertContainerEl = document.querySelector('.page-content')
	}
	if( theRoute === 'carpools' ){ return  domEl.innerHTML = theContent[theRoute] }

	if( theRoute === 'flights' ){  return domEl.innerHTML = theContent[theRoute] }

	domEl.innerHTML = theContent.home

}
var controllerRouter = function(){
	var currentRoute = window.location.hash.slice(1)
	if(currentRoute.length === 0){ currentRoute = 'home' }
	var pageContentEl = document.querySelector('.page-content')
	renderActiveTab(currentRoute)
	renderContentTo(pageContentEl, currentRoute, pageContentObj)
}


tabsContainerEl.addEventListener('click', function(evt){
	var clickedTabEl = evt.target
	var route = clickedTabEl.dataset.route
	window.location.hash = route
})


controllerRouter()
window.addEventListener('hashchange', controllerRouter)
