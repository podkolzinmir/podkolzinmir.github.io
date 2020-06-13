// Sheetrock.js 1.0 Example 2
// https://chriszarate.github.io/sheetrock/

// Let’s look at switch hitters and rank them by batting average. 
// We’ll only grab the columns we care about and fetch just the 
// top ten to help focus the reader’s attention.

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';

// Load top ten switch hitters.
$('#chart_div').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D where D = 'Brown' ",
  fetchSize: 10
});


// making a tree
google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Big');

var name = " ";
var big = " ";

  for (i = 0; i < 5; i++){
  name =  $('#chart_div').sheetrock({
        url: mySpreadsheet,
        query: "select C",
        fetchSize: 5
      }); 

    big =  $('#chart_div').sheetrock({
        url: mySpreadsheet,
        query: "select D",
        fetchSize: 5
      }); 

      data.addRows([
       [name, big]
      ]);
    
  }



  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {'allowHtml':true});
}