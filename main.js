const prompt = require("prompt-sync")({sigint: true});
const Field = require("./field.js");

let grid = Field.generateField(12,12);
let field = new Field(grid);


let found = field.isHat(field.position);
do {
	field.print();
	let p = Object.assign({}, field.position); // copy value
	const c = prompt("Which way (L,R,U,D)? ");
	if (c == "L") 
	 	p.y--;
	else if (c == "R")
		p.y++;
	else if (c == "D")
		p.x++;
	else if (c == "U")
		p.x--;	

	if (field.outside(p)) {
		console.log("خسرت. خارج حدود الحقل");
		break;
	}
	
	if (field.isHole(p)) {
		console.log("خسرت. وقعت بالحفرة");
		break;
	}

	found = field.isHat(p);
	if (found) {
		console.log("أحسنت. وجدت القبعة") 
		break;
	}

	field.visited(p)
	field.position = p;
}
while(!found)