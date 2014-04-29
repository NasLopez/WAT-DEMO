//File: views/HomeView.js
define(['jquery','underscore','backbone', 'collections/Posts', 'text!templates/home/homeTemplate.html', 'text!templates/home/postsListTemplate.html'], function($, _, Backbone, Posts, homeTemplate, postList){

	var HomeView = Backbone.View.extend({
		el: '.page',
		render: function () {
			var that = this;
			that.posts = new Posts;
			console.log("HomeView FETCH: ", that.posts.fetch);
			that.posts.fetch({
				success: function (posts) {
					var template = _.template(homeTemplate, {sources: that.posts.sources()});
					that.$el.html(template);
					template = _.template(postList, {posts: that.posts.filterSourceBy('all')});
					that.$('#posts-list').html(template);
				}
			});
		},
		events: {
			'change #ddpFilter' : 'filter'
		},
		filter : function(e){
			console.log("Event", e.target.value);
			var template = _.template(postList, {posts: this.posts.filterSourceBy(e.target.value)});
			this.$('#posts-list').html(template);
		}
	});

	return HomeView;
});