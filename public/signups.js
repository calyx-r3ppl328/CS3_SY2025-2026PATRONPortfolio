const clubFilter = document.getElementById("clubFilter");
const tableContainer = document.getElementById("tableContainer");
const totalSignup = document.getElementById("totalSignup");

// GET DATA FROM LOCALSTORAGE
const signups = JSON.parse(localStorage.getItem("signups")) || [];

// RENDER TABLE
function renderTable(data) {
  tableContainer.innerHTML = "";

  if (data.length === 0) {
    totalSignup.textContent = "Total Signup :";
    tableContainer.innerHTML = `
      <div class="no-data">No Sign Ups for the club</div>
    `;
    return;
  }

  totalSignup.textContent = `Total Signup : ${data.length}`;

  let table = `
    <table>
      <thead>
        <tr>
          <th>Club</th>
          <th>ID</th>
          <th>Fullname</th>
          <th>Grade</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Intern|Extern</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.forEach(s => {
    table += `
      <tr>
        <td>${s.club}</td>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.grade}</td>
        <td>${s.address}</td>
        <td>${s.number}</td>
        <td>${s.dorms}</td>
      </tr>
    `;
  });

  table += "</tbody></table>";
  tableContainer.innerHTML = table;
}

// FILTER HANDLER
clubFilter.addEventListener("change", () => {
  const selected = clubFilter.value;

  if (selected === "all") {
    renderTable(signups);
  } else {
    const filtered = signups.filter(s => s.club === selected);
    renderTable(filtered);
  }
});

// INITIAL LOAD
renderTable(signups);
