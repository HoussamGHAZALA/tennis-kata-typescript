import Player from "./player";
import {AdvantageScoreConcreteStrategy} from "./ScoreStrategy/AdvantageScoreConcreteStrategy";
import {WinScoreConcreteStrategy} from "./ScoreStrategy/WinScoreConcreteStrategy";
import {DeuceScoreConcreteStrategy} from "./ScoreStrategy/DeuceScoreConcreteStrategy";
import {ScoreStrategy} from "./ScoreStrategy/ScoreStrategy";
import {DefaultScoreConcreteStrategy} from "./ScoreStrategy/DefaultScoreConcreteStrategy";

export class Game {
    private readonly first: Player;
    private readonly second: Player;
    private strategies: Array<any>;

    constructor(first: Player, second: Player) {
        this.first = first;
        this.second = second;
        this.strategies = [
            new DefaultScoreConcreteStrategy(this.first, this.second),
            new DeuceScoreConcreteStrategy(this.first, this.second),
            new AdvantageScoreConcreteStrategy(this.first, this.second),
            new WinScoreConcreteStrategy(this.first, this.second)
        ]
    }

    public play() {
        //Todo : a match with random player.scores()
    }

    //Todo to move to a strategy context...
    public getScoreBetweenPlayers(): ScoreStrategy {
        const [responsibleStrategie] = this.strategies
            .filter(strategie => strategie.isResponsible())
            .map(
                strategie => strategie.getGameResult()
            );
        return responsibleStrategie;
    }

}
