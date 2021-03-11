import {Injectable} from '@angular/core';
import {FieldValue, IField, IGame} from './game.interface';
import {Field} from './Field';
import {Game} from './Game';

@Injectable({
  providedIn: 'root'
})

export class GameFactoryService {

  generate(): IGame {
    return this.createGame(this.createField(), false);
  }

  createField(): IField[][] {
    const field: IField[][] = [[new Field(0), new Field(1), new Field(0), new Field(0)],
                                [new Field(0), new Field(0), new Field(0), new Field(1)],
                                [new Field(1), new Field(0), new Field(1), new Field(0)],
                                [new Field(1), new Field(1), new Field(0), new Field(0)]];

    return field;
  }

  createGame(field: IField[][], didwin: boolean): IGame {
    const game = new Game(field, didwin);
    return game;
  }

}
