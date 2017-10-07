console.log('bot is starting');
var Twit =require('twit');
var config = require('./config');
//config file contains all tokens and keys
var T = new Twit(config);
//get
/*
var params = { 
	q: 'akarshan16', 
	count: 100 
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i <tweets.length; i++) {
  	console.log(tweets[i].text);
  	console.log(tweets[i].created_at);
  }
 };
 */

//post
//tweetthetweet();
//setInterval(tweetthetweet, 10000000); calls the function after interval

function tweetthetweet(text) {
	var tweet = {
		status: text 
	}

	T.post('statuses/update', tweet, postData);

	function postData(err, data, response) {
		if(err) {
			console.log("something is wrong");
		} else {
	  		console.log("it worked!");
		}
	};
}

//stream

//setting up a usser stream
var stream = T.stream('user');
//anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetthetweet('.@' + screenName +' Thanks for following me!');
}

