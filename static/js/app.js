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