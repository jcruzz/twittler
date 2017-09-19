var date = new Date();
date = date.toLocaleTimeString()
//date = date.split(' ');
//date = date[1] + ' ' + date[2];
var realNames = {
  'douglascalhoun' : 'Douglas Calhoun',
  'mracus'         : 'Max R Acus',
  'realDonaldTrump'     : 'Donald Trump',
  'sharksforcheap' : 'ZOOKEEPER WILLIS'
};
var userTweets = {
  'douglascalhoun' : [],
  'mracus'         : [],
  'realDonaldTrump': [],
  'sharksforcheap' : []
}

var tweetHistory = [];


function goHome(){
  $('.tweet').remove();
  for(var i = 0; i < tweetHistory.length; i++){
    tweetHistory[i].appendTo($('body'));
  }
}

function getVal(obj){
  $('.tweet').remove();
  
  for(var i = 0; i < userTweets[obj.value].length; i++){
    userTweets[obj.value][i].appendTo($('body'));
  }
}
//////////////////////////////// Data Generator /////////////////////////////////
      $(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div class="tweet jumbotron container"></div>');
          $tweet.html(
            '<div class="username ' + tweet.user 
            + '"><strong><button value="'+ tweet.user + '"onclick="getVal(this)" class="userlink" style="color: black;">'
            + realNames[tweet.user] 
            +'</button></strong> @' + tweet.user 
            +'<img class="verified" src="verified.png">'+ ' - ' 
            + date
            + '</div>' 
            + tweet.message + '<br><br>'
            + '<span class="icon-bubbles"> comments </span>'
            + '<span class="icon-loop"> retweets </span>'
            + '<span class="icon-heart"> likes </span>'
            + '<span class="icon-envelope-letter"> message </span>'
            );
          $tweet.appendTo($body);
          userTweets[tweet.user].push($tweet);
          tweetHistory.push($tweet);
          index -= 1;
        }

      });

console.log(userTweets)