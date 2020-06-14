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
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');

        var j = "Jess Giangrande";
        var julia = "Julia Earl";
        var katie = "Katie Tirabassi";
        var briana = "Briana Maetta";
        var miriam = "Miriam Podkolzin";
        var d = "Dani Ragan";

    

        // For each orgchart box, provide the name, manager, and tooltip to show.
       data.addRows([
         [j, "Caitlyn Labonte"],
         [julia, j],
         [katie, j],
         [briana, katie],
         [miriam, julia],
         [d, miriam],
         ["Caitlyn Labonte", "Michelle Plotzker"],
         ["Michelle Plotzker", "Sarah Byrne"],
         ["Sarah Byrne, Shannon McGrath"]
        
        ]);
  



  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {'allowHtml':true});
}