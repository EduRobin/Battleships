export enum FieldValue {
  WATER, SHIP_PART, PART_OF_DESTROYED_SHIP, UNKNOWN
}
// 1) vystrelim na unknown a je tam voda
// 2) vystrelim a je tam kus lodi (1)
// 3) vystrelim a znicil jsem lod
// 4) nevystrelil jsem ještě, ale něco tam je




export interface IField {
  readonly value: FieldValue;
  /**
   * @return changed instance of game with new state
   */
  shoot(): IGame;
}

/**
 * immutable state of the game
 */
export interface IGame {
  readonly grid: IField[][];
  readonly didWin: boolean;
}
