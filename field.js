
var pathCharacter = '*';
const HAT = '^';
const HOLE = 'O';
const fieldCharacter = '░';

class Field {

	constructor(field) {
		this._field = field;
		this._pos = {x : 0, y : 0}
		this._hatX = undefined;
		this._hatY = undefined;
		this.visited(this._pos)
	}

	print() {
		for (let i=0; i<this._field.length; i++) {
			for (let j of this._field[i])
				process.stdout.write(j)
			process.stdout.write("\n");
		}			
	}

	get position() {
		return this._pos;
	}

	set position(p) {
		this._pos = p;
	}	

	visited(pos) {
		this._field[pos.x][pos.y] = pathCharacter;
	}	

	outside(pos) {
		let outsideX =  (pos.x < 0 || pos.x >= this._field.length);
		let outsideY =  (pos.y < 0 || pos.y >= this._field[pos.x].length)
		return outsideX || outsideY;
	}

	isHole(pos) {
		return this._field[pos.x][pos.y] == HOLE;
	}

	isHat(pos) {
		return this._field[pos.x][pos.y] == HAT;
	}

	static generateField(height, width) {
		let field = new Array(width);
		
		var hatX = Math.floor(Math.random() * height);
		var hatY = Math.floor(Math.random() * width);		

		for (let i=0; i < field.length; i++) {
			field[i] = new Array(height);
			for (let j=0; j < field[i].length; j++) {
				if (i == hatX && j == hatY)
					field[i][j] = HAT;
				else
				{
					let tile = Math.random() < 0.2 ?  HOLE : fieldCharacter;
					field[i][j] = tile
				}
			}
		}
		return field;
	}
}

module.exports = Field;