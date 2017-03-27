var hour1 = document.getElementById("hours_tens");
var hour2 = document.getElementById("hours_units");
var minute1 = document.getElementById("Minutes_tens");
var minute2 = document.getElementById("Minutes_units");
var second1 = document.getElementById("seconds_tens");
var second2 = document.getElementById("seconds_units");

setInterval(function(){
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	if(hour<10){
		hour = "0"+hour;
	};
	if(minute<10){
		minute = "0"+minute;
	}
	if(second<10){
		second = "0"+second;
	}
	hour = hour.toString();
	minute = minute.toString();
	second = second.toString();
	changeElement(hour[0],hour1);
	changeElement(hour[1],hour2);
	changeElement(minute[0],minute1);
	changeElement(minute[1],minute2);
	changeElement(second[0],second1);
	changeElement(second[1],second2);
},1000)

function changeElement(num,element){
	
	switch(num){
		case "0":
			element.className = "zero";
			break;
		case "1":
			element.className = "one";
			break;
		case "2":
			element.className = "two";
			break;
		case "3":
			element.className = "three";
			break;
		case "4":
			element.className = "four";
			break;
		case "5":
			element.className = "five";
			break;
		case "6":
			element.className = "six";
			break;
		case "7":
			element.className = "seven";
			break;
		case "8":
			element.className = "eight";
			break;
		case "9":
			element.className = "nine";
			break;
	}
}

