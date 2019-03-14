import Player from "./player";
import {AdvantageScoreConcreteStrategy} from "./ScoreStrategy/AdvantageScoreConcreteStrategy";
import {WinScoreConcreteStrategy} from "./ScoreStrategy/WinScoreConcreteStrategy";
import {DeuceScoreConcreteStrategy} from "./ScoreStrategy/DeuceScoreConcreteStrategy";
import {ScoreStrategy} from "./ScoreStrategy/ScoreStrategy";
import {DefaultScoreConcreteStrategy} from "./ScoreStrategy/DefaultScoreConcreteStrategy";
import {ResultByPlayer} from "./game.result";

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

    public play() {
        //Todo : a match with random player.scores()
    }

    //Todo to move to a strategy context...
    public getScoreBetweenPlayers(firstPlayer: Player,
                                  secondPlayer: Player): ResultByPlayer[] {
        const [gameResult] = this.strategies
            .filter(strategie => strategie.isResponsible(firstPlayer, secondPlayer))
            .map(
                strategie => strategie.getGameResult(firstPlayer, secondPlayer)
            );
        return gameResult;
    }

}
