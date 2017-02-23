function forEach(arr, cb){
	for(var i = 0; i < arr.length; i++){
		cb(arr[i], i, arr)
	}
}

import $ from 'jquery'

//modeled almost exactly after the routing warmup demo did by Travis 02/11, utilized the pushing to tables warmup also

var pageContentObj = {
	home:  `
				<div class="title-div container-div">
				<h1>The Basic Facts</h1>
				<table class =“table table-home”>
				  <thead>

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
				</div>
					`,

	concerts: 'concerts',
	carpools: 'carpool',
	flights:  `flights`
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


//Concerts Section//
	if( theRoute === 'concerts' ){
		console.log(theRoute)
		$.getJSON('http://apis.is/concerts')
			.then(function(serverRes){
				var htmlStr = `<div class="title-div container-div container-concerts">
												<h1>Concerts</h1>
				`
				serverRes.results.forEach (function (singleObj){
					console.log(singleObj)
							htmlStr += `<div class="container-single-concert">`
							htmlStr += `<div class="concert-image"><img src="${singleObj.imageSource}"></div>`
							htmlStr += `<div class="concert-name">${singleObj.eventDateName}</div>`
							htmlStr += `<div class="concert-venue"><span class="venue-name"><mark>Venue:</mark> </span>${singleObj.eventHallName}</div>`
							htmlStr += `<div class="concert-date">${singleObj.dateOfShow}</div>`
							htmlStr += `</div>`
										})
							htmlStr += `</div>`
				concertContainerEl.innerHTML = htmlStr
		})
				var concertContainerEl = document.querySelector('.page-content')
	}

//Carpools Section//
	if( theRoute === 'carpools' ){
	$.getJSON('http://apis.is/rides/samferda-drivers/')
		.then(function(serverRes){
			var htmlStr = `<div class="title-div container-div">
											<h1>Carpools</h1>


			<table class =“table table-carpools”>
									 <thead>
									 <tr>
											 <th>Time of Departure</th>
											 <th>From</th>
											 <th>To</th>
									 </tr>
									 </thead>
									 <tbody>`

			serverRes.results.forEach (function (carpoolObj){
				console.log(carpoolObj)


			htmlStr +=	`
									<tr>
										<td>${carpoolObj.time}</td>
											<td>${carpoolObj.from}</td>
												<td>${carpoolObj.to}</td>
									</tr>`
								})
		htmlStr += `</tbody>
								</table>
								</div>`

			carpoolContainerEl.innerHTML = htmlStr
	})

	var carpoolContainerEl = document.querySelector('.page-content')
}

//Flights Section//
	if( theRoute === 'flights' ){
		var fetchArrivalsPromise = $.getJSON(`http://apis.is/flight?language=en&type=arrivals`)
		var fetchDeparturesPromise = $.getJSON(`http://apis.is/flight?language=en&type=departures`)
		$.when(fetchArrivalsPromise, fetchDeparturesPromise).then(function(arrivalsData, departureData){
			// console.log('arrivalsData', arrivalsData[0])
			// 	console.log('departureData', departureData[0])

				var htmlStr = `<div class="container-flights container-div">
														<div class="title-div">
															<h1>Flights</h1>
														</div>

														<table class="table-flights">
										 			<thead>
													 <tr><h3>Arrivals</h3></tr>
													<tr>
														 <th>Date</th>
														 <th>Arrival Time</th>
														 <th>Origin</th>
														 <th>Airline</th>
													 </tr>
													 </thead>
													 <tbody>`

				arrivalsData[0].results.forEach (function (flightObj){
					console.log (flightObj)
				htmlStr +=	`
											<tr>
													<td>${flightObj.date}</td>
													<td>${flightObj.plannedArrival}</td>
													<td>${flightObj.from}</td>
													<td>${flightObj.airline}</td>
											</tr>
										`
										})
				htmlStr += `</tbody>
										</table>`

				htmlStr +=`<table class='table-flights'>
														<thead>
													 <tr><h3>Departures</h3></tr>
																<tr>
																	<th>Date</th>
																	 <th>Departure Time</th>
																	 <th>Destination</th>
																	 <th>Airline</th>
																 </tr>
																 </thead>
																 <tbody>`

										departureData[0].results.forEach (function (flightObj){
											console.log (flightObj)

										htmlStr +=	`
																	<tr>
																				<td>${flightObj.date}</td>
																				<td>${flightObj.plannedArrival}</td>
																				<td>${flightObj.to}</td>
																				<td>${flightObj.airline}</td>
																	</tr>
																`
																})
										htmlStr += `<tbody>
																</table>`
										htmlStr += `</div>`
				flightContainerEl.innerHTML = htmlStr
		})

		var flightContainerEl = document.querySelector('.page-content')
	}


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
