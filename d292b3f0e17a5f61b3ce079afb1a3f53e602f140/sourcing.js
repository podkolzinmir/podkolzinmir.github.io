
       google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
       // data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          ["Jessica Giangrande", "Caitlyn Labonte"],
         ["Julia Earl", "Jessica Giangrande"],
         ["Katie Tirabassi", "Jessica Giangrande"],
         ["Briana Maetta", "Katie Tirabassi"],
         ["Miriam Podkolzin", "Julia Earl"],
         ["Dani Ragan", "Miriam Podkolzin"],
         ["Caitlyn Labonte", "Michelle Plotzker"],
         ["Michelle Plotzker", "Sarah Byrne"],
         ["Sarah Byrne, Shannon McGrath"],
         ["Shannon McGrath", "Erica Carpenter"],
         ["Erica Carpenter","Elizabeth Bakarich"],
         ["Elizabeth Bakarich", "Poonam Shah"],
         ["Poonam Shah", "Christina Lombardi"],
         ["Christina Lombardi", "Sandra Desmond"],
         ["Sandra Desmond", "Dana Wambser"],
         ["Dana Wambser", "Lauren Barron"],
         ["Lauren Barron", "Sharon Bellask"],
         ["Sharon Bellask", "Maria Lopez"],
         ["Maria Lopez", "Annabella Molina"],
         ["Annabella Molina", "Kristen Johnson"],
         ["Kristen Johnson", "Kelly Lettler"],
         ["Kelly Lettler", "Rosemarie Witter"],
         ["Rosemarie Witter", "Jude Van Decker"],
         ["Judy Van Decker", ""],
         ["Jackie Hilt", "Elizabeth Bakarich"]
        
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {'allowHtml':true});
      }
 
