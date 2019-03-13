"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdvantageScoreConcreteStrategy_1 = require("./ScoreStrategy/AdvantageScoreConcreteStrategy");
const WinScoreConcreteStrategy_1 = require("./ScoreStrategy/WinScoreConcreteStrategy");
const DeuceScoreConcreteStrategy_1 = require("./ScoreStrategy/DeuceScoreConcreteStrategy");
class Game {
    constructor(first, second) {
        this.first = first;
        this.second = second;
        this.strategies = [
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
//# sourceMappingURL=Game.js.map