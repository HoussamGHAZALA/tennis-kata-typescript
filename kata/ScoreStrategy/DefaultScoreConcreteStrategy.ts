import {ScoreStrategy} from "./ScoreStrategy";
import {ResultByPlayer} from "../game.result";
import Player from "../player";
import {Score} from "../score";

export class DefaultScoreConcreteStrategy implements ScoreStrategy{

    private firstPlayer: Player;
    private secondPlayer : Player;

    constructor(first: Player, second: Player) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }

    //After each point has been submitted the system
    //will display the current score, using the style
    //described on basics.
    getGameResult(): ResultByPlayer[] {
        return[
            new ResultByPlayer(Score[this.firstPlayer._score], this.firstPlayer),
            new ResultByPlayer(Score[this.secondPlayer._score], this.secondPlayer)
        ];

    }

    isResponsible(): boolean {
        return this.firstPlayer._score < 3 && this.secondPlayer._score < 3;
    }


}