// API URL
const apiUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const populationData = data.data;


    const tableBody = document.querySelector("#populationTable tbody");


    populationData.forEach(entry => {
      const row = document.createElement("tr");

      const yearCell = document.createElement("td");
      yearCell.textContent = entry.Year;
      row.appendChild(yearCell);

      const populationCell = document.createElement("td");
      populationCell.textContent = entry.Population;
      row.appendChild(populationCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
