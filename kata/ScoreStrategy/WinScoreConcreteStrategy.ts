import {ScoreStrategy} from "./ScoreStrategy";
import Player from "../player";
import {ResultByPlayer} from "../game.result";
import {Score} from "../score";
import {PlayerByEcart} from "../player-by-ecart";

export class WinScoreConcreteStrategy implements ScoreStrategy {

    private firstPlayer: Player;
    private secondPlayer : Player;

    constructor(first: Player, second: Player) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }

    //A game is won by the firstPlayer player to have won
    //at least four points in total and at least two points
    //more than the opponent.
    isResponsible(): boolean {
        return (this.firstPlayer._score >= 4 || this.secondPlayer._score >= 4)
            && this.playerPoints()._ecart >= 2;
    }

    getGameResult(): ResultByPlayer[] {
        return [new ResultByPlayer(Score[Score.WIN], this.playerPoints()._player)];
    }

    playerPoints() {
        const mathematicEcart = this.firstPlayer._score - this.secondPlayer._score;
        const ecart = Math.abs(mathematicEcart);
        if(mathematicEcart > 0) {
            return new PlayerByEcart(ecart, this.firstPlayer)
        }
        if(mathematicEcart < 0) {
            return new PlayerByEcart(ecart, this.secondPlayer)
        }
        return new PlayerByEcart(0, new Player(''));
    }

}
