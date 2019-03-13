"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdvantageScoreConcreteStrategy_1 = require("./ScoreStrategy/AdvantageScoreConcreteStrategy");
const WinScoreConcreteStrategy_1 = require("./ScoreStrategy/WinScoreConcreteStrategy");
const DeuceScoreConcreteStrategy_1 = require("./ScoreStrategy/DeuceScoreConcreteStrategy");
const DefaultScoreConcreteStrategy_1 = require("./ScoreStrategy/DefaultScoreConcreteStrategy");
class Game {
    constructor(first, second) {
        this.first = first;
        this.second = second;
        this.strategies = [
            new DefaultScoreConcreteStrategy_1.DefaultScoreConcreteStrategy(this.first, this.second),
            new DeuceScoreConcreteStrategy_1.DeuceScoreConcreteStrategy(this.first, this.second),
            new AdvantageScoreConcreteStrategy_1.AdvantageScoreConcreteStrategy(this.first, this.second),
            new WinScoreConcreteStrategy_1.WinScoreConcreteStrategy(this.first, this.second)
        ];
    }
    play() {
        //Todo : a match with random player.scores()
    }
    //Todo to move to a strategy context...
    getScoreBetweenPlayers() {
        const [responsibleStrategie] = this.strategies
            .filter(strategie => strategie.isResponsible())
            .map(strategie => strategie.getGameResult());
        return responsibleStrategie;
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map