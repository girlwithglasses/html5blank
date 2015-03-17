(function( root, $, undefined ) {
	"use strict";

	$(function () {
		// DOM ready, take it away
		// do we have a chartify table?
		if ( $('table.pie-chartify') ) {
			// load the appropriate APIs
			var url = 'https://www.google.com/jsapi';
			$.ajax({
				url: url,
				dataType: "script",
				success: function(){
					google.load('visualization', '1.0',
						{'packages':['corechart'], 'callback': drawChart });
				}
			});
		};
	});

	/**
		create a chart for each of the tables with the class 'pie-chartify'
		inserts a div after the table element that contains the chart
	*/
	function drawChart() {
		// get the data from the table
		$('.pie-chartify').each( function(i,e){
			var id = 'chart-' + i,
				dt = dataTableFromTable( e ),
				opt = {
					'title': $(this).children('caption').text(),
					'width': 400,
					'height': 300,
					'is_3D': true },
				c;
			$(this).after('<div class="piechart" id="' + id + '"></div>');

			c = new google.visualization.PieChart(
				document.getElementById(id)
			);
			c.draw(dt, opt);
		});
	}

	/**
		Pass in an HTML table
		extract the data and create a DataTable object from it
	*/
	function dataTableFromTable( t ) {
		var tbl = new google.visualization.DataTable();
		$(t).find('thead th').each(function(i,e){
			0 === i
			? tbl.addColumn('string', $(this).text() )
			: tbl.addColumn('number', $(this).text() );
		});

		$(t).find('tbody tr').each(function(i,e){
			tbl.addRow(
				$(this).find('td').map(function(j,f){
					if (0 === j) {
						return $(this).text()
					}
					else {
						return parseFloat( $(this).text() )
					}
				})
				.get());
		});
		return tbl;
	}



} ( this, jQuery ));