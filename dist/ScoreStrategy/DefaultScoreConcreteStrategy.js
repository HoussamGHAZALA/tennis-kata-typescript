"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_result_1 = require("../game.result");
const score_1 = require("../score");
class DefaultScoreConcreteStrategy {
    constructor(first, second) {
        this.firstPlayer = first;
        this.secondPlayer = second;
    }
    //After each point has been submitted the system
    //will display the current score, using the style
    //described on basics.
    getGameResult() {
        return [
            new game_result_1.ResultByPlayer(score_1.Score[this.firstPlayer._score], this.firstPlayer),
            new game_result_1.ResultByPlayer(score_1.Score[this.secondPlayer._score], this.secondPlayer)
        ];
    }
    isResponsible() {
        return this.firstPlayer._score < 3 && this.secondPlayer._score < 3;
    }
}
exports.DefaultScoreConcreteStrategy = DefaultScoreConcreteStrategy;
//# sourceMappingURL=DefaultScoreConcreteStrategy.js.map