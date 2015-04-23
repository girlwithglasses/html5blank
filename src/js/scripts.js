(function (root, $, undefined) {
	"use strict";
	/**
		Pass in an HTML table
		extract the data and create a DataTable object from it
	*/
	function dataTableFromTable(t) {
		var tbl = new google.visualization.DataTable(),
			col_type = "string";

		$(t).find("thead th").each(function(i){
			if (1 === i) {
				col_type = "number";
			}
			tbl.addColumn(col_type, $(this).text() );
		});

		$(t).find("tbody tr").each(function(){
			tbl.addRow(
				$(this).find("td").map(function(i){
					if (0 === i) {
						return $(this).text();
					}
					return parseFloat( $(this).text() );
				})
				.get());
		});
		return tbl;
	}

	/**
		create a chart for each of the tables with the class "pie-chartify"
		inserts a div after the table element that contains the chart
	*/
	function drawChart() {
		// get the data from the table
		$(".pie-chartify").each( function(i,e){
			var id = "chart-" + i,
				dt = dataTableFromTable( e ),
				opt = {
					'pieSliceText': 'none',
					'tooltip': {
						'text': 'percentage'
					},
					'chartArea': {
					'width': '90%',
						'height': '90%'
					},
					'width': 600,
					'height': 400,
					'legend': {
						position: 'labeled'
					},
					'fontName': 'Helvetica',
					'fontSize': 14,
					"is3D": true
				},
				c;
			$(this).after("<div class='piechart' id='" + id + "'></div>");

			c = new google.visualization.PieChart(
				document.getElementById(id)
			);
			c.draw(dt, opt);
		});
	}

	$( function () {
		// DOM ready, take it away
		// do we have a chartify table?
		if ( $("table.pie-chartify").length > 0 ) {
			// load the appropriate APIs
			var url = "https://www.google.com/jsapi";
			$.ajax({
				url: url,
				dataType: "script",
				success: function(){
					google.load("visualization", "1.1",
						{"packages":["corechart"], "callback": drawChart });
				}
			});
		}
	});
} ( this, jQuery ));

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));