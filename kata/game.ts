import Player from "./player";
import {AdvantageScoreConcreteStrategy} from "./ScoreStrategy/advantageScoreConcrete.strategy";
import {WinScoreConcreteStrategy} from "./ScoreStrategy/winScoreConcrete.strategy";
import {DeuceScoreConcreteStrategy} from "./ScoreStrategy/deuceScoreConcrete.strategy";
import {DefaultScoreConcreteStrategy} from "./ScoreStrategy/defaultScoreConcrete.strategy";
import {ResultByPlayer} from "./game.result";
import {GameFactory} from "./ScoreStrategy/game.factory";

export class Game {
    private readonly first: Player;
    private readonly second: Player;
    private strategies: Array<any>;

    constructor(first: Player, second: Player) {
        this.first = first;
        this.second = second;
        this.strategies = [
            new DefaultScoreConcreteStrategy(),
            new DeuceScoreConcreteStrategy(),
            new AdvantageScoreConcreteStrategy(),
            new WinScoreConcreteStrategy()
        ]
    }

    public getScoreBetweenPlayers(firstPlayer: Player,
                                  secondPlayer: Player): ResultByPlayer[] {
        return new GameFactory()
            .selectGameStrategy(firstPlayer, secondPlayer)
            .getGameResult(firstPlayer, secondPlayer)
    }

}
