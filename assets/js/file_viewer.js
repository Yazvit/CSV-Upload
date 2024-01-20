console.log('Im in');
document.getElementById("go").addEventListener("click", searchTable);

function searchTable() {
  // Get the input value and convert it to lowercase
  const input = document.getElementById("search-input").value.toLowerCase();
  console.log(input);
  
  // Get all table rows
  const rows = document.getElementsByTagName("tr");

  // Iterate through rows
  for (let i = 0; i < rows.length; i++) {
    // Get all cells within the current row
    const cells = rows[i].querySelectorAll("td");
    
    // Check if any cell contains the input value
    Array.from(cells).forEach(cell => {
      const cellText = cell.innerText.toLowerCase();
      const found = cellText.includes(input);
      
      // If the input value is found in the cell, highlight it; otherwise, remove highlight
      if (found) {
        cell.classList.add("highlight");
      } else {
        cell.classList.remove("highlight");
      }
    });
  }
}





