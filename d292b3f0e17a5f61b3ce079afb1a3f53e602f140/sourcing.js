
       google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          ['Jessica Giangrande', 'Caitlyn Labonte',''],
         ['Julia Earl', 'Jessica Giangrande',''],
         ['Katie Tirabassi', 'Jessica Giangrande',''],
         ['Briana Maetta', 'Katie Tirabassi',''],
         ['Miriam Podkolzin', 'Julia Earl',''],
         ['Dani Ragan', 'Miriam Podkolzin',''],
         ['Caitlyn Labonte', 'Michelle Plotzker',''],
         ['Michelle Plotzker', ' ','']
    
        
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {'allowHtml':true});
      }
 
