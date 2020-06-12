// Sheetrock.js 1.0 Example 2
// https://chriszarate.github.io/sheetrock/

// Let’s look at switch hitters and rank them by batting average. 
// We’ll only grab the columns we care about and fetch just the 
// top ten to help focus the reader’s attention.

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';

// Load top ten switch hitters.
$('#switch-hitters').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,L where E = 'Both' order by L desc",
  fetchSize: 10
});