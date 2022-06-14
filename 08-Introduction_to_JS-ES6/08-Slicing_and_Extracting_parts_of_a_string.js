/**
 * Slicing allows us to separate or dice strings to separate them into individual characters.
 *
 * Hint: Strings are 0 indexed.
 *
 * To know the number of characters take the ending position minus the starting position
 *
 */

var tweet = prompt("compose your tweet");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
