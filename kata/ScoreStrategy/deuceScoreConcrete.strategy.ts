import Player from "../player";
import {GameStrategy} from "./game.strategy";
import {ResultByPlayer} from "../game.result";
import {Score} from "../score";

export class DeuceScoreConcreteStrategy implements GameStrategy {

    isResponsible(firstPlayer: Player, secondPlayer: Player): boolean {
        return (firstPlayer._score === secondPlayer._score) &&
            firstPlayer._score >= 3;
    }

    //If at least three points have been scored by each player,
    //and the scores are equal, the score is “deuce”.
    getGameResult(firstPlayer: Player, secondPlayer: Player): ResultByPlayer[] {
        return [new ResultByPlayer(Score[Score.DEUCE])];
    }

}