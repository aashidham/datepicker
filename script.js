var start_date = new Date();
var days_to_show = 7;
var date_array = ['Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];
var times_array = ['Midnight' , '1 AM' , '2 AM' , '3 AM' , '4 AM' , '5 AM' , '6 AM' , '7 AM' , '8 AM' , '9 AM' , '10 AM' , '11 AM' , 'Noon' , '1 PM' , '2 PM' , '3 PM' , '4 PM' , '5 PM' , '6 PM' , '7 PM' , '8 PM' , '9 PM' , '10 PM' , '11 PM'];

$(document).ready(function () {
	var caption_month = document.getElementById('captions_month');
	var caption_date  = document.getElementById('captions_date');
	var container = document.getElementsByClassName('container')[0];
	for (var i = 0; i < days_to_show; i++) {
		var locale = "en-us";
		var currentDate = new Date(start_date.getTime() + 24 * 60 * 60 * 1000 * i);
		var month = currentDate.toLocaleString(locale, { month: "long" }).substring(0,3);
		var date = currentDate.getDate();
		var caption_month_string = month + ' ' + date;
		var title = document.createElement('span');
		title.innerHTML = caption_month_string;
		title.setAttribute('class','month');
		title.style.width = parseInt(100 / days_to_show) -1 + '%';
		caption_month.appendChild(title);

		var day = date_array[currentDate.getDay()];
		var title1 = document.createElement('span');
		title1.innerHTML = day;
		title1.setAttribute('class','date');
		title1.style.width = parseInt(100 / days_to_show) -1 + '%';
		caption_date.appendChild(title1);		
	};

	for (var i = 0; i < 24; i++) {
		var classname_for_small_div = '';
		var big_div = document.createElement('div');

		var times = document.createElement('div');
		times.setAttribute('class','times');
		times.innerHTML = times_array[i];
		big_div.appendChild(times);

		for (var j = 0; j < days_to_show; j++) {
			var smaller_div = document.createElement('div');
			smaller_div.setAttribute('class','rows_days');
			smaller_div.style.width = parseInt(100 / days_to_show) -1 + '%';
			for (var k = 0; k < 3; k++) {
				var small_div = document.createElement('div');
				classname_for_small_div = j + 1 +' ' + i + ' ' + k*15 + ' rows_minutes';
				console.log(classname_for_small_div);
				small_div.setAttribute('class', classname_for_small_div);
				smaller_div.appendChild(small_div);
			}
			var small_div = document.createElement('div');
			classname_for_small_div = j + 1 +' ' + i + ' ' + 45 + ' rows_minutes';
			small_div.setAttribute('class', classname_for_small_div);
			smaller_div.appendChild(small_div);

			big_div.appendChild(smaller_div);
		};

		var clear_div= document.createElement('div');
		clear_div.setAttribute('class','clear');

		container.appendChild(big_div);
		container.appendChild(clear_div);
	};
})