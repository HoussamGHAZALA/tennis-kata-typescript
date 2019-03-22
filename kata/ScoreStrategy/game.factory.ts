import Player from "../player";
import {DefaultScoreConcreteStrategy} from "./defaultScoreConcrete.strategy";
import {WinScoreConcreteStrategy} from "./winScoreConcrete.strategy";
import {AdvantageScoreConcreteStrategy} from "./advantageScoreConcrete.strategy";
import {DeuceScoreConcreteStrategy} from "./deuceScoreConcrete.strategy";
import {GameStrategy} from "./game.strategy";

export class GameFactory {

    readonly strategies: GameStrategy[] = [
        new DefaultScoreConcreteStrategy(),
        new DeuceScoreConcreteStrategy(),
        new AdvantageScoreConcreteStrategy(),
        new WinScoreConcreteStrategy()
    ];

    public selectGameStrategy(firstPlayer: Player,
                              secondPlayer: Player): GameStrategy/*ResultByPlayer[]*/ {
        return this.strategies
            .filter(it => it.isResponsible(firstPlayer, secondPlayer))[0];

    }
}