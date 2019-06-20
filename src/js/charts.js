"use strict";

var gcharts = function(){};

gcharts.prototype = {

	constructor: gcharts,

	init: function() {
		var self = this;
		if (document.readyState !== "loading"){
			self.go();
		} else if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", self.go);
		} else {
			document.attachEvent("onreadystatechange", function() {
				if (document.readyState !== "loading") {
					self.go();
				}
			});
		}
	},

	go: function() {
		// do we have a chartify table?
		var self = this,
		tables = document.getElementsByClassName("pie-chartify"),
		b = document.getElementsByTagName('body')[0];
		// we have javascript!
		b.classList.add('js');
		if (tables.length > 0) {
			var req = encodeURIComponent( '{"modules":[{"name":"visualization","version":"1.0","packages":["corechart"],"callback":pieChartify}]}' );

			icra_scripts.addScript("google-jsapi", "https://www.google.com/jsapi?autoload=" + req);
		}
	},

	/*
		Add a script to the page
	addScript: function(id, src) {
		var
		s = document.getElementsByTagName("script")[0],
		js = document.createElement("script");
		if (document.getElementById(id)) {
			return;
		}
		js.id = id;
		js.src = src;
		js.async = 1;
		s.parentNode.insertBefore(js, s);
	},
	*/

	/**
		Pass in an HTML table
		extract the data and create a DataTable object from it
	*/
	dataTableFromTable: function (t) {
		var tbl = new google.visualization.DataTable(),
		col_type = "string";

		[].forEach.call( t.getElementsByTagName("th"), function(v,i){
			if (1 === i) {
				col_type = "number";
			}
			tbl.addColumn(col_type, v.textContent );
		});

		[].forEach.call( t.querySelectorAll("tbody tr"), function(v) {
			var arr = [].map.call(v.getElementsByTagName("td"), function(v2,i2){
				if (0 === i2) {
					return v2.textContent;
				}
				return parseFloat( v2.textContent );
			});
			tbl.addRow(arr);
		});
		return tbl;
	},

	/**
		create a chart for each of the tables with the class "pie-chartify"
		inserts a div after the table element that contains the chart
	*/
	pieChartify: function () {
		var i,
		tables = document.getElementsByClassName("pie-chartify"),
		tl = tables.length, id, dt,
		opt = {
			pieSliceText: "none",
			tooltip: {
				text: "percentage"
			},
			chartArea: {
				width: "90%",
				height: "90%"
			},
			width: 600,
			height: 400,
			legend: {
				position: "labeled"
			},
			fontName: "Helvetica",
			fontSize: 16,
			is3D: true
		},
		c;

		// get the data from the table
		for (i = 0; i < tl; i++) {
			id = "chart-" + i,
			dt = this.dataTableFromTable( tables[i] );
			// insert a div after the table
			tables[i].insertAdjacentHTML("afterend", "<div class='piechart' id='" + id + "'></div>");

			c = new google.visualization.PieChart(
				document.getElementById(id)
			);
			c.draw(dt, opt);
		}
	}
};

/**
	Polyfills required:

	getElementsByClassName
	classList
	addEventListener
	[].forEach
	[].map

*/
function pieChartify() {
	var gc = new gcharts();
	gc.pieChartify();
}

(function () {
	var gc = new gcharts();
	gc.init();
}());
