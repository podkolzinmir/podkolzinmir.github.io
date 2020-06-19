google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  
var queryString = encodeURIComponent('SELECT A,B');

var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1H_wHTebESvSYJC-nvpaz3BosebC_mpY4Z7lFoKO4Zkc/edit#gid=0' + queryString);
query.send(handleSampleDataQueryResponse);
}

function handleSampleDataQueryResponse(response) {
if (response.isError()) {
  alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  return;
}


var data = response.getDataTable();



  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {'allowHtml':true});
}