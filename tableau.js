
function updateTable(table) {

	document.getElementById("tableauScore").innerHTML = "";
	for (const line of table) {
		let tr = document.createElement("tr");
		let p1 = document.createElement("td");
		p1.textContent = line[0];
		let p2 = document.createElement("td");
		p2.textContent = line[1];

		tr.appendChild(p1);
		tr.appendChild(p2);

		document.getElementById("tableauScore").append(tr);
	}
}