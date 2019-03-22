import {GameStrategy} from "./game.strategy";
import Player from "../player";
import {ResultByPlayer} from "../game.result";
import {Score} from "../score";
import {PlayerDiscard} from "../player-by-ecart";

export class WinScoreConcreteStrategy implements GameStrategy {

    //A game is won by the firstPlayer player to have won
    //at least four points in total and at least two points
    //more than the opponent.
    isResponsible(firstPlayer: Player, secondPlayer: Player): boolean {
        return (firstPlayer._score >= 4 || secondPlayer._score >= 4)
            && Player.playerPoints(firstPlayer, secondPlayer)._ecart >= 2;
    }

    getGameResult(firstPlayer: Player, secondPlayer: Player): ResultByPlayer[] {
        return [new ResultByPlayer(Score[Score.WIN], Player.playerPoints(firstPlayer, secondPlayer)._player)];
    }

}
