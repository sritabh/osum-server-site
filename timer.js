var countDownDate = new Date("December 31, 2018 24:00:00").getTime(); /*Change Date to the end of the season*/
var x = setInterval(function() { var now = new Date().getTime();
var distance = countDownDate - now; 
var days = Math.floor(distance / (1000 * 60 * 60 * 24));  
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
document.getElementById("counter").innerHTML = "Season Ends In " + days + "Days " + hours + "Hrs ";  
if (distance < 0) {  clearInterval(x); 
document.getElementById("counter").innerHTML = "This is Static Version of Original Site"; } }, 1000);  /*Change This to "Season's Result" When In use,It'll be printed when it crosses the season end date*/
