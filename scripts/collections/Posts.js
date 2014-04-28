//File: collections/Posts
define(['jquery','underscore','backbone'], function($, _, Backbone){

	var posts = Backbone.Collection.extend({
		url: 'api/posts.json'
	});

	return posts;
});