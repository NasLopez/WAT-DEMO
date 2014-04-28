//File: models/Post
define(['jquery','underscore','backbone'], function($, _, Backbone){

	var Post = Backbone.Model.extend({
		urlRoot: '/api/posts',
		url:function(){
			return this.urlRoot + '/' + this.id + '.json';
		}
	});

	return Post;
});