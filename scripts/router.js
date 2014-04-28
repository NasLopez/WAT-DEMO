//File: router.js
define(['jquery','underscore','backbone', 'views/HomeView', 'views/PostView'], function($, _, Backbone, HomeView, PostView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			'post/:id': 'home'
		}
	});

	var init = function(){

		var router = new AppRouter();

		router.on('route:home', function (act) {
			var homeView = new HomeView();
			homeView.render();
		});

		router.on('route:home', function (id) {
			var postView = new PostView();
			postView.render({id: id});
		});

		Backbone.history.start();
	};

	return {init: init};
});