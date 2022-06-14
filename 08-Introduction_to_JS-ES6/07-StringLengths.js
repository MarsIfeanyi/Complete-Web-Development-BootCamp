/**
 * We can use the length property to get the number of characters in a particular string.
 *
 * Write a program that can tell you how many characters you have written and how many you have left.
 */

var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;
alert(
  "You have written" +
    tweetCount +
    "characters, you have " +
    (140 - tweetCount) +
    "characters remaining"
);
