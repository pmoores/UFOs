// 11.2.4 Declare the tableData variable
const tableData = data;

// Reference the HTMl table using the D3 JavaScript library
var tbody = d3.select("tbody");

// 11.5.1 Create a function called buildTable and pass 'data' as the argument
function buildtTable(data) {
    // Clear out existing data
    tbody.html("");

// 11.5.2 Add the forEach function - works similar to for loop
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value
        // as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
    );
});
}

// 11.5.3. Create a function to handle actions after an input is given
// e.g. filtering the table by date
function handleClick() {
    let date = d3.select("datetime").property("value");
    let filteredData = tableData;
   

    // 11.5.4. Check if a date was entered and filter the date using this date
    if (date) {
        // Apply 'filter' to the table to keep only the rows where the
        // 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date); 
    }
  
    // Rebuild the table using the filtered data
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
