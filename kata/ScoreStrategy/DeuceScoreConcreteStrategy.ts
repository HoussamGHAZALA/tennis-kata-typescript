import Player from "../player";
import {ScoreStrategy} from "./ScoreStrategy";
import {ResultByPlayer} from "../game.result";
import {Score} from "../score";

export class DeuceScoreConcreteStrategy implements ScoreStrategy {

    private firstPlayer: Player;
    private secondPlayer : Player;

    constructor(first: Player, second: Player) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }

    isResponsible(): boolean {
        return this.firstPlayer._score === this.secondPlayer._score &&
            this.firstPlayer._score >= 3;
    }

    //If at least three points have been scored by each player,
    //and the scores are equal, the score is “deuce”.
    getGameResult(): ResultByPlayer[] {
        return [new ResultByPlayer(Score[Score.DEUCE])];
    }

}