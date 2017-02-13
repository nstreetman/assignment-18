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

	concerts:  `
				<table class =“table table-concerts”>
					<thead>
						<tr><h2>Concerts</h2></tr>
						</thead>
						<tbody>
						<tr>
					<td>${fetchConcertInfo.imageSource}</td>
					</tr>
				</tbody>

				</table>
					`,

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

	if( theRoute === 'home' ){  return domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'concerts' ){  return domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'carpools' ){ return  domEl.innerHTML = theContent[theRoute] }
	if( theRoute === 'flights' ){  return domEl.innerHTML = theContent[theRoute] }

	domEl.innerHTML = theContent.home
	window.location.hash = ''
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
let fetchConcertInfo = $.getJSON('http://apis.is/concerts')
    console.log(fetchConcertInfo)
