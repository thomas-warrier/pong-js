
function addScoreToTable(score1, score2) {
	let tr = document.createElement("tr");
	let p1 = document.createElement("td");
	p1.textContent = score1;
	let p2 = document.createElement("td");
	p2.textContent = score2;

	tr.appendChild(p1);
	tr.appendChild(p2);

	document.getElementById("tableauScore").append(tr);
}

function loadTableScore() {
	let score = sessionStorage.getItem("scores");
	score = JSON.parse(score);
	console.log(score);
	if (score && score != null) {
		return score;
	}
	return [];
}

function updateTable(table) {

	if (table.length > 5) {
		table.shift();
	}
	if (table.length == 0) {
		document.getElementById("tableauScore").style.visibility = "hidden";
	} else {
		document.getElementById("tableauScore").style.visibility = "visible";
	}
	sessionStorage.setItem("scores", JSON.stringify(table));
	const tableClone = [...table];
	tableClone.reverse();
	document.getElementById("tableauScore").innerHTML = "";//clear previous score
	addScoreToTable("Player 1", "Player 2");
	for (const line of tableClone) {
		addScoreToTable(line[0], line[1]);
	}
}