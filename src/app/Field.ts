import {FieldValue, IField, IGame} from './game.interface';
import {Game} from "./Game";


export class Field implements IField {

  value: FieldValue;
  grid: Field[][];
  realValue: FieldValue;

  constructor(value: FieldValue, field: Field[][], realValue: FieldValue) {
    this.value = value;
    this.grid = field;
    this.realValue = realValue;
  }

  shoot(): IGame {

    const newField: Field[][] = [];

    for (let i = 0; i < this.grid.length; i++) {
      for (let x = 0; x < this.grid.length; x++) {
        const field: Field = this.grid[i][x];
        newField[i][x] = new Field(field.value, newField, field.realValue);
        if (this === field) {
          newField[i][x] = new Field(field.value, newField, field.realValue);
        }
      }
    }

    return new Game(newField, this.didWin(newField));
  }

  didWin(field: Field[][]): boolean {
    const win = true;
    const discovered = true;
    let pocetLodi = 0;
    for (let i = 0; i < field.length; i++) {
      for (let x = 0; x < field.length; x++) {
        if (field[i][x].realValue === FieldValue.SHIP_PART) {
          pocetLodi = pocetLodi + 1;
        }
      }
    }
    if (pocetLodi === 0) {
      return win;
    } else { return false; }
  }
}
