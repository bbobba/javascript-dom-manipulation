// TIPS & RESOURCES:
// @TODO: Delete this section for final solution

// https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// -------------------------------------------------------

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Display table
d3.select("tbody").selectAll().data(tableData).enter().append('tr').html(d=>{
    return `<td>${d.datetime}</td>
    <td>${d.city}</td>
    <td>${d.state}</td>
    <td>${d.country}</td>
    <td>${d.shape}</td>
    <td>${d.durationMinutes}</td>
    <td>${d.comments}</td>`
})


// Function to return the search results
function searchResults(tableData){
    var selection = d3.select("tbody").selectAll('tr').data(tableData);
    selection.enter().append("tr").merge(selection).html(d=>{
        return `<td>${d.datetime}</td>
        <td>${d.city}</td>
        <td>${d.state}</td>
        <td>${d.country}</td>
        <td>${d.shape}</td>
        <td>${d.durationMinutes}</td>
        <td>${d.comments}</td>`
    })
    selection.exit().remove();
}

// Get a handle on the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredTable = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredTable)
  
  searchResults(filteredTable)
});