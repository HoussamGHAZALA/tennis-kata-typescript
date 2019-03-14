import {ScoreStrategy} from "./ScoreStrategy";
import {ResultByPlayer} from "../game.result";
import Player from "../player";
import {Score} from "../score";

export class DefaultScoreConcreteStrategy implements ScoreStrategy{

    //After each point has been submitted the system
    //will display the current score, using the style
    //described on basics.
    getGameResult(firstPlayer: Player, secondPlayer: Player): ResultByPlayer[] {
        return[
            new ResultByPlayer(Score[firstPlayer._score], firstPlayer),
            new ResultByPlayer(Score[secondPlayer._score ], secondPlayer)
        ];

    }

    isResponsible(firstPlayer: Player, secondPlayer: Player): boolean {
        return firstPlayer._score < 3 && secondPlayer._score < 3;
    }


}