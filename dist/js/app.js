(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//modeled almost exactly after the routing warmup demo did by Travis 02/11, utilized the pushing to tables warmup also

var pageContentObj = {
	home: '\n\t\t\t\t<table class =\u201Ctable table-home\u201D>\n\t\t\t\t  <thead>\n\t\t\t\t    <tr><th><h3>The Basic Facts</h3></th> </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody>\n\t\t\t\t    <tr>\n\t\t\t\t      <td>Native Name:</td>\n\t\t\t\t      <td>Island</td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <td>Demonym:</td>\n\t\t\t\t      <td>Icelander</td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <td>Area (m2):</td>\n\t\t\t\t      <td>103000</td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr>\n\t\t\t\t      <td>Calling Code:</td>\n\t\t\t\t      <td>352</td>\n\t\t\t\t    </tr>\n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t\t\t',

	concerts: '\n\t\t\t\t<table class =\u201Ctable table-concerts\u201D>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr><h2>Concerts</h2></tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t<td>Coming Soon!</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\n\t\t\t\t</table>\n\t\t\t\t\t',

	carpools: '\n\t\t\t<table class =\u201Ctable table-carpools\u201D>\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr><h2>Carpools</h2></tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Coming Soon!</td>\n\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\n\t\t\t\t</table>\t',

	flights: '\n\t\t\t\t<table class =\u201Ctable table-flights\u201D>\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr><h2>Flights</h2></tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Coming Soon!</td>\n\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\n\t\t\t\t</table>\n\t\t\t'
};

var tabsContainerEl = document.querySelector(".nav-tabs");

function renderActiveTab(theCurrentRoute) {
	var previousActiveTabEl = document.querySelector('[class="tabcontent__tab active"]');
	previousActiveTabEl.classList.remove('active');

	var currentActiveTabEl = document.querySelector('[data-route="' + theCurrentRoute + '"]');
	currentActiveTabEl.classList.add('active');
}

function renderContentTo(domEl, theRoute, theContent) {

	if (theRoute === 'home') {
		return domEl.innerHTML = theContent[theRoute];
	}
	if (theRoute === 'concerts') {
		return domEl.innerHTML = theContent[theRoute];
	}
	if (theRoute === 'carpools') {
		return domEl.innerHTML = theContent[theRoute];
	}
	if (theRoute === 'flights') {
		return domEl.innerHTML = theContent[theRoute];
	}

	domEl.innerHTML = theContent.home;
	window.location.hash = '';
}

var controllerRouter = function controllerRouter() {
	var currentRoute = window.location.hash.slice(1);
	if (currentRoute.length === 0) {
		currentRoute = 'home';
	}
	var pageContentEl = document.querySelector('.page-content');
	renderActiveTab(currentRoute);
	renderContentTo(pageContentEl, currentRoute, pageContentObj);
};

tabsContainerEl.addEventListener('click', function (evt) {
	var clickedTabEl = evt.target;
	var route = clickedTabEl.dataset.route;
	window.location.hash = route;
});

controllerRouter();
window.addEventListener('hashchange', controllerRouter);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNwQixrb0JBRG9COztBQTJCcEIsa1NBM0JvQjs7QUF5Q3BCLHdRQXpDb0I7O0FBd0RwQjtBQXhEb0IsQ0FBckI7O0FBeUVBLElBQUksa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUF0Qjs7QUFFQSxTQUFTLGVBQVQsQ0FBeUIsZUFBekIsRUFBeUM7QUFDeEMsS0FBSSxzQkFBc0IsU0FBUyxhQUFULENBQXVCLGtDQUF2QixDQUExQjtBQUNBLHFCQUFvQixTQUFwQixDQUE4QixNQUE5QixDQUFxQyxRQUFyQzs7QUFFQSxLQUFJLHFCQUFxQixTQUFTLGFBQVQsbUJBQXVDLGVBQXZDLFFBQXpCO0FBQ0Esb0JBQW1CLFNBQW5CLENBQTZCLEdBQTdCLENBQWlDLFFBQWpDO0FBQ0E7O0FBRUQsU0FBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDLFVBQTFDLEVBQXFEOztBQUVwRCxLQUFJLGFBQWEsTUFBakIsRUFBeUI7QUFBRyxTQUFPLE1BQU0sU0FBTixHQUFrQixXQUFXLFFBQVgsQ0FBekI7QUFBK0M7QUFDM0UsS0FBSSxhQUFhLFVBQWpCLEVBQTZCO0FBQUcsU0FBTyxNQUFNLFNBQU4sR0FBa0IsV0FBVyxRQUFYLENBQXpCO0FBQStDO0FBQy9FLEtBQUksYUFBYSxVQUFqQixFQUE2QjtBQUFFLFNBQVEsTUFBTSxTQUFOLEdBQWtCLFdBQVcsUUFBWCxDQUExQjtBQUFnRDtBQUMvRSxLQUFJLGFBQWEsU0FBakIsRUFBNEI7QUFBRyxTQUFPLE1BQU0sU0FBTixHQUFrQixXQUFXLFFBQVgsQ0FBekI7QUFBK0M7O0FBRTlFLE9BQU0sU0FBTixHQUFrQixXQUFXLElBQTdCO0FBQ0EsUUFBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEVBQXZCO0FBQ0E7O0FBRUQsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVU7QUFDaEMsS0FBSSxlQUFlLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUEyQixDQUEzQixDQUFuQjtBQUNBLEtBQUcsYUFBYSxNQUFiLEtBQXdCLENBQTNCLEVBQTZCO0FBQUUsaUJBQWUsTUFBZjtBQUF1QjtBQUN0RCxLQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxpQkFBZ0IsWUFBaEI7QUFDQSxpQkFBZ0IsYUFBaEIsRUFBK0IsWUFBL0IsRUFBNkMsY0FBN0M7QUFDQSxDQU5EOztBQVNBLGdCQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBUyxHQUFULEVBQWE7QUFDdEQsS0FBSSxlQUFlLElBQUksTUFBdkI7QUFDQSxLQUFJLFFBQVEsYUFBYSxPQUFiLENBQXFCLEtBQWpDO0FBQ0EsUUFBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEtBQXZCO0FBQ0EsQ0FKRDs7QUFPQTtBQUNBLE9BQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vbW9kZWxlZCBhbG1vc3QgZXhhY3RseSBhZnRlciB0aGUgcm91dGluZyB3YXJtdXAgZGVtbyBkaWQgYnkgVHJhdmlzIDAyLzExLCB1dGlsaXplZCB0aGUgcHVzaGluZyB0byB0YWJsZXMgd2FybXVwIGFsc29cblxudmFyIHBhZ2VDb250ZW50T2JqID0ge1xuXHRob21lOiAgYFxuXHRcdFx0XHQ8dGFibGUgY2xhc3MgPeKAnHRhYmxlIHRhYmxlLWhvbWXigJ0+XG5cdFx0XHRcdCAgPHRoZWFkPlxuXHRcdFx0XHQgICAgPHRyPjx0aD48aDM+VGhlIEJhc2ljIEZhY3RzPC9oMz48L3RoPiA8L3RyPlxuXHRcdFx0XHQgIDwvdGhlYWQ+XG5cdFx0XHRcdCAgPHRib2R5PlxuXHRcdFx0XHQgICAgPHRyPlxuXHRcdFx0XHQgICAgICA8dGQ+TmF0aXZlIE5hbWU6PC90ZD5cblx0XHRcdFx0ICAgICAgPHRkPklzbGFuZDwvdGQ+XG5cdFx0XHRcdCAgICA8L3RyPlxuXHRcdFx0XHQgICAgPHRyPlxuXHRcdFx0XHQgICAgICA8dGQ+RGVtb255bTo8L3RkPlxuXHRcdFx0XHQgICAgICA8dGQ+SWNlbGFuZGVyPC90ZD5cblx0XHRcdFx0ICAgIDwvdHI+XG5cdFx0XHRcdCAgICA8dHI+XG5cdFx0XHRcdCAgICAgIDx0ZD5BcmVhIChtMik6PC90ZD5cblx0XHRcdFx0ICAgICAgPHRkPjEwMzAwMDwvdGQ+XG5cdFx0XHRcdCAgICA8L3RyPlxuXHRcdFx0XHQgICAgPHRyPlxuXHRcdFx0XHQgICAgICA8dGQ+Q2FsbGluZyBDb2RlOjwvdGQ+XG5cdFx0XHRcdCAgICAgIDx0ZD4zNTI8L3RkPlxuXHRcdFx0XHQgICAgPC90cj5cblx0XHRcdFx0ICA8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdGAsXG5cblx0Y29uY2VydHM6ICBgXG5cdFx0XHRcdDx0YWJsZSBjbGFzcyA94oCcdGFibGUgdGFibGUtY29uY2VydHPigJ0+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPjxoMj5Db25jZXJ0czwvaDI+PC90cj5cblx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRkPkNvbWluZyBTb29uITwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdGAsXG5cblx0Y2FycG9vbHM6IGBcblx0XHRcdDx0YWJsZSBjbGFzcyA94oCcdGFibGUgdGFibGUtY2FycG9vbHPigJ0+XG5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdDx0cj48aDI+Q2FycG9vbHM8L2gyPjwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0ZD5Db21pbmcgU29vbiE8L3RkPlxuXG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGJvZHk+XG5cblx0XHRcdFx0PC90YWJsZT5cdGAsXG5cblx0ZmxpZ2h0czogIGBcblx0XHRcdFx0PHRhYmxlIGNsYXNzID3igJx0YWJsZSB0YWJsZS1mbGlnaHRz4oCdPlxuXG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8dHI+PGgyPkZsaWdodHM8L2gyPjwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0ZD5Db21pbmcgU29vbiE8L3RkPlxuXG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGJvZHk+XG5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdGBcbn1cblxudmFyIHRhYnNDb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LXRhYnNcIilcblxuZnVuY3Rpb24gcmVuZGVyQWN0aXZlVGFiKHRoZUN1cnJlbnRSb3V0ZSl7XG5cdHZhciBwcmV2aW91c0FjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwidGFiY29udGVudF9fdGFiIGFjdGl2ZVwiXScpXG5cdHByZXZpb3VzQWN0aXZlVGFiRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuXHR2YXIgY3VycmVudEFjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm91dGU9XCIke3RoZUN1cnJlbnRSb3V0ZX1cIl1gKVxuXHRjdXJyZW50QWN0aXZlVGFiRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29udGVudFRvKGRvbUVsLCB0aGVSb3V0ZSwgdGhlQ29udGVudCl7XG5cblx0aWYoIHRoZVJvdXRlID09PSAnaG9tZScgKXsgIHJldHVybiBkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50W3RoZVJvdXRlXSB9XG5cdGlmKCB0aGVSb3V0ZSA9PT0gJ2NvbmNlcnRzJyApeyAgcmV0dXJuIGRvbUVsLmlubmVySFRNTCA9IHRoZUNvbnRlbnRbdGhlUm91dGVdIH1cblx0aWYoIHRoZVJvdXRlID09PSAnY2FycG9vbHMnICl7IHJldHVybiAgZG9tRWwuaW5uZXJIVE1MID0gdGhlQ29udGVudFt0aGVSb3V0ZV0gfVxuXHRpZiggdGhlUm91dGUgPT09ICdmbGlnaHRzJyApeyAgcmV0dXJuIGRvbUVsLmlubmVySFRNTCA9IHRoZUNvbnRlbnRbdGhlUm91dGVdIH1cblxuXHRkb21FbC5pbm5lckhUTUwgPSB0aGVDb250ZW50LmhvbWVcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJ1xufVxuXG52YXIgY29udHJvbGxlclJvdXRlciA9IGZ1bmN0aW9uKCl7XG5cdHZhciBjdXJyZW50Um91dGUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKVxuXHRpZihjdXJyZW50Um91dGUubGVuZ3RoID09PSAwKXsgY3VycmVudFJvdXRlID0gJ2hvbWUnIH1cblx0dmFyIHBhZ2VDb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb250ZW50Jylcblx0cmVuZGVyQWN0aXZlVGFiKGN1cnJlbnRSb3V0ZSlcblx0cmVuZGVyQ29udGVudFRvKHBhZ2VDb250ZW50RWwsIGN1cnJlbnRSb3V0ZSwgcGFnZUNvbnRlbnRPYmopXG59XG5cblxudGFic0NvbnRhaW5lckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KXtcblx0dmFyIGNsaWNrZWRUYWJFbCA9IGV2dC50YXJnZXRcblx0dmFyIHJvdXRlID0gY2xpY2tlZFRhYkVsLmRhdGFzZXQucm91dGVcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSByb3V0ZVxufSlcblxuXG5jb250cm9sbGVyUm91dGVyKClcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY29udHJvbGxlclJvdXRlcilcbiJdfQ==
