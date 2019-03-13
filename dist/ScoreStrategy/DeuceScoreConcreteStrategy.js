"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_result_1 = require("../game.result");
const score_1 = require("../score");
class DeuceScoreConcreteStrategy {
    constructor(first, second) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }
    isResponsible() {
        return this.firstPlayer._score === this.secondPlayer._score &&
            this.firstPlayer._score >= 3;
    }
    //If at least three points have been scored by each player,
    //and the scores are equal, the score is “deuce”.
    getGameResult() {
        return [new game_result_1.ResultByPlayer(score_1.Score[score_1.Score.DEUCE])];
    }
}
exports.DeuceScoreConcreteStrategy = DeuceScoreConcreteStrategy;
//# sourceMappingURL=DeuceScoreConcreteStrategy.js.map