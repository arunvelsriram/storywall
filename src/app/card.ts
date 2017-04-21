export class Card {
  number: number;
  name: string;
  lane: string;
  owner: string;
  anotherOwner: string;

  constructor(number: number, name: string, lane: string, owner: string, anotherOwner: string) {
  	this.number = number;
  	this.name = name;
  	this.lane = lane;
  	this.owner = owner;
  	this.anotherOwner = anotherOwner;
  }
}
