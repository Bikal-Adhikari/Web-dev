var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert(
  "you have written " +
    tweetCount +
    " characters, you have " +
    (140 - tweetCount) +
    " characters remaning."
);
