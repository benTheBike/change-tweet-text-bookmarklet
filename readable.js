// A more readable version of the bookmarklet code.
javascript:(function(){
  for (i = 0; i < document.getElementsByClassName("tweet-text").length; i++) { 
    document.getElementsByClassName("tweet-text")[i].innerHTML = "TEXT";
  }
}());
