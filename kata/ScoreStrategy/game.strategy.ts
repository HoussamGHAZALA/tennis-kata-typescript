import {ResultByPlayer} from "../game.result";
import Player from "../player";

export interface GameStrategy {
    getGameResult(firstPlayer: Player, secondPlayer: Player): ResultByPlayer[];
    isResponsible(firstPlayer: Player, secondPlayer: Player): boolean;
}
