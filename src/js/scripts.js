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

function drawChart() {
	// get the data from the table
	$('.pie-chartify').each(function(ix,el){

		var div_id = 'chart-' + ix;
		$(this).after('<div id="' + div_id + '"></div>');
		var tbl = new google.visualization.DataTable();
		$('thead th').each(function(i,e){
			if (0 === i) {
				tbl.addColumn('string', $(this).text() );
			}
			else {
				tbl.addColumn('number', $(this).text() );
			}
		});

		$(this).find('tbody tr').each(function(i,e){
			var row = Array();
			$(this).find('td').each(function(j,f){
				if (0 === j) {
					row.push( $(this).text() );
				}
				else {
					row.push( parseFloat( $(this).text() ) );
				}
			});
			tbl.addRow(row);
		});
		var options = {
			'title': $(this).children('caption').text(),
			'width': 400,
			'height': 300,
			'is_3D': true };

		var chart = new google.visualization.PieChart(
			 document.getElementById(div_id)
		);
		chart.draw(tbl, options);
	});
}
} ( this, jQuery ));