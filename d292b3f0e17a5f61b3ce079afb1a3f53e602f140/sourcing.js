// Sheetrock.js 1.0 Example 2
// https://chriszarate.github.io/sheetrock/

// Let’s look at switch hitters and rank them by batting average. 
// We’ll only grab the columns we care about and fetch just the 
// top ten to help focus the reader’s attention.

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';




// making a tree
google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
       /* data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        var j = "Jessica";
        var julia = "julia";
        var katie = "katie";
        var briana = "briana";
        var miriam = "miriam";
        var d = "dani";*/

       

        // data from google sheet
        $('#chart_div').sheetrock({
          url: mySpreadsheet,
          query: "select C, D",
          fetchSize: 5
        });

        // For each orgchart box, provide the name, manager, and tooltip to show.
     /*   data.addRows([
         [j, "", "gbig"],
         [julia, j, "big"],
         [katie, j, "aunt"],
         [briana, katie, " "],
         [miriam, julia, " "],
         [d, miriam, "little"]
        ]);
  
*/


  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {'allowHtml':true});
}