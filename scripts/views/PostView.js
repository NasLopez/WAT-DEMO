//File: views/PostView.js
define(['jquery','underscore','backbone', 'libs/utils', 'models/Post', 'text!templates/postTemplate.html'], function($, _, Backbone, Utils, Post, postTemplate){

	var PostView = Backbone.View.extend({
		el: '.page',
		render: function (options) {
			if (options.id) {
				var that = this;
				var post = new Post({id: options.id});
				post.fetch({
					success: function (post){
						var template = _.template(postTemplate, {post: post.attributes.post});
						that.$el.html(template);
					}
				});			
			}
		}
	});

	return PostView;
});