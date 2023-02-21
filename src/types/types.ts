import {Teams} from "./enums";

export interface Player {
  id: number;
  name: string;
  score: number;
  dead: boolean;
  kills: number;
  deaths: number;
}

export interface Team {
  name: Teams;
  players: Player[];
}

export interface GameData {
  winner: Teams;
  orange: Team;
  cyan: Team;
}
