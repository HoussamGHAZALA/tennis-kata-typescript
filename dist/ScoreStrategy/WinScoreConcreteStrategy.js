"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("../player");
const game_result_1 = require("../game.result");
const score_1 = require("../score");
const player_by_ecart_1 = require("../player-by-ecart");
class WinScoreConcreteStrategy {
    constructor(first, second) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }
    //A game is won by the firstPlayer player to have won
    //at least four points in total and at least two points
    //more than the opponent.
    isResponsible() {
        return (this.firstPlayer._score >= 4 || this.secondPlayer._score >= 4)
            && this.playerPoints()._ecart >= 2;
    }
    getGameResult() {
        return [new game_result_1.ResultByPlayer(score_1.Score[score_1.Score.WIN], this.playerPoints()._player)];
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
exports.WinScoreConcreteStrategy = WinScoreConcreteStrategy;
//# sourceMappingURL=WinScoreConcreteStrategy.js.map