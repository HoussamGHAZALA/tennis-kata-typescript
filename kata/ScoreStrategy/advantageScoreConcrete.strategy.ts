import Player from "../player";
import {GameStrategy} from "./game.strategy";
import {ResultByPlayer} from "../game.result";
import {Score} from "../score";

export class AdvantageScoreConcreteStrategy implements GameStrategy {


    isResponsible(firstPlayer: Player, secondPlayer: Player): boolean {
        let ecart: number = Player.playerPoints(firstPlayer, secondPlayer)._ecart;
        return (firstPlayer._score >= 3 &&
            secondPlayer._score >= 3) &&
            ecart === 1;
    }

    //If at least three points have been scored by each side
    //and a player has one more point than his opponent
    //the score of the game is “advantage” for the player in the lead.
    getGameResult(firstPlayer: Player, secondPlayer: Player): ResultByPlayer[] {
        return [new ResultByPlayer(Score[Score.ADVANTAGE], Player.playerPoints(firstPlayer, secondPlayer)._player)];
    }

}
