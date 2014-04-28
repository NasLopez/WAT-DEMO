//File: views/HomeView.js
define(['jquery','underscore','backbone', 'collections/Posts', 'text!templates/homeTemplate.html'], function($, _, Backbone, Posts, homeTemplate){

	var HomeView = Backbone.View.extend({
		el: '.page',
		render:function () {
			var that = this;
			var posts = new Posts;
			posts.fetch({
				success: function (posts) {
					console.log(posts.models[0].attributes.posts);
					var template = _.template(homeTemplate, {posts: posts.models[0].attributes.posts});
					that.$el.html(template);
				}
			});
		}

	});

	return HomeView;
});