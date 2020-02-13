	// Set the date we're counting down to
			  var countDownDate = new Date("Apr 1, 2020 00:00:00").getTime();
			 
			// Update the count down every 1 second
			var x = setInterval(function() {
			 
			  // Get todays date and time
			  var now = new Date().getTime();
			 
			  // Find the distance between now and the count down date
			   var distance = countDownDate - now;
			
			  // Time calculations for days, hours, minutes and seconds
			  var days = Math.floor(distance /  (1000 * 60 * 60 * 24));
			  var hours = Math.floor((distance % (1000 *  60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor((distance  % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor((distance  % (1000 * 60)) / 1000);
			
			  // Display the result in the element with id="demo"
			  //document.getElementById("demo").innerHTML = days + "d " +  hours + "h "
			  //+ minutes + "m " + seconds + "s ";
			  
			   
			  document.getElementById("day-count").innerHTML = days;
			  document.getElementById("hour-count").innerHTML = hours;
			  document.getElementById("minute-count").innerHTML = minutes;
			  document.getElementById("second-count").innerHTML = seconds;
			  
			
			  // If the count down is finished, write some text 
			  if (distance < 0) {
			     clearInterval(x);
//			    document.getElementById("demo").innerHTML  = "EXPIRED";
			  }
			}, 1000);