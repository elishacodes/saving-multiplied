function getStuff() {
	$.ajax({
		url: "https://savingsmultipliedssh.firebaseio.com/items.json",
		dataType: "jsonp",
		success : function(data){
			console.log(data[0].image);
			console.log(data[0].price);
			console.log(data[0].seller);
			console.log(data[0].title);
			console.log(data[0].endDate);
		var theStuff = $("#theStuff");
		var begin = "<div class='col-lg-3 col-md-3 col-sm-6 col-xs-12 stuffs'>";
		var end = "</div>";
			for(i=0;i<data.length;i++){

				var output = [];
				output.push("<img src='" + data[i].image  + "'>");
				output.push(data[i].price  );
				output.push(data[i].seller  );
				output.push(data[i].title  );
				output.push(data[i].endDate );

			theStuff.append(begin + output.join("<br>") + end);


			}
		}
	});
}
getStuff();


				// <div class="col-xs-3">
		  //           <a href="#" class="thumbnail">
		  //               <img src="125x125.jpg" alt="125x125">
		  //           </a>
				// </div>