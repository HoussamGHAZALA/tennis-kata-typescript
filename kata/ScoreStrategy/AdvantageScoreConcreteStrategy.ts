import Player from "../player";
import {ScoreStrategy} from "./ScoreStrategy";
import {ResultByPlayer} from "../game.result";
import {Score} from "../score";
import {PlayerByEcart} from "../player-by-ecart";

export class AdvantageScoreConcreteStrategy implements ScoreStrategy {

    private firstPlayer: Player;
    private secondPlayer : Player;

    constructor(first: Player, second: Player) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }

    isResponsible(): boolean {
        let ecart: number = this.playerPoints()._ecart;
        return (this.firstPlayer._score >= 3 &&
            this.secondPlayer._score >= 3) &&
            ecart === 1;
    }

    //If at least three points have been scored by each side
    //and a player has one more point than his opponent
    //the score of the game is “advantage” for the player in the lead.
    getGameResult(): ResultByPlayer[] {
        return [new ResultByPlayer(Score[Score.ADVANTAGE], this.playerPoints()._player)];
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
