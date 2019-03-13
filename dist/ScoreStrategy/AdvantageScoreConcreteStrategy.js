"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("../player");
const game_result_1 = require("../game.result");
const score_1 = require("../score");
const player_by_ecart_1 = require("../player-by-ecart");
class AdvantageScoreConcreteStrategy {
    constructor(first, second) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }
    isResponsible() {
        let ecart = this.playerPoints()._ecart;
        return (this.firstPlayer._score >= 3 &&
            this.secondPlayer._score >= 3) &&
            ecart === 1;
    }
    //If at least three points have been scored by each side
    //and a player has one more point than his opponent
    //the score of the game is “advantage” for the player in the lead.
    getGameResult() {
        return [new game_result_1.ResultByPlayer(score_1.Score[score_1.Score.ADVANTAGE], this.playerPoints()._player)];
    }
    playerPoints() {
        const mathematicEcart = this.firstPlayer._score - this.secondPlayer._score;
        const ecart = Math.abs(mathematicEcart);
        if (mathematicEcart > 0) {
            return new player_by_ecart_1.PlayerByEcart(ecart, this.firstPlayer);
        }
        if (mathematicEcart < 0) {
            return new player_by_ecart_1.PlayerByEcart(ecart, this.secondPlayer);
        }
        return new player_by_ecart_1.PlayerByEcart(0, new player_1.default(''));
    }
}
exports.AdvantageScoreConcreteStrategy = AdvantageScoreConcreteStrategy;
//# sourceMappingURL=AdvantageScoreConcreteStrategy.js.map