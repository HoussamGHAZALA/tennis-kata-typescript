import { expect } from 'chai';
import 'mocha';
import {GameFactory} from "./game.factory";
import Player from "../player";
import {AdvantageScoreConcreteStrategy} from "./advantageScoreConcrete.strategy";
import {DefaultScoreConcreteStrategy} from "./defaultScoreConcrete.strategy";
import {WinScoreConcreteStrategy} from "./winScoreConcrete.strategy";
import {DeuceScoreConcreteStrategy} from "./deuceScoreConcrete.strategy";

describe('game factory class', () => {

    it('should select DEFAULT startegy', () => {
        const nadal = new Player('Nadal', 1);
        const djokovic = new Player('Djokovic', 2);
        const gameContext = new GameFactory();

        const selected = gameContext.selectGameStrategy(nadal, djokovic);

        expect(selected).to.be.an.instanceof(DefaultScoreConcreteStrategy);
    });

    it('should select ADVANTAGE strategy', () => {
        const nadal = new Player('Nadal', 5);
        const djokovic = new Player('Djokovic', 4);
        const gameContext = new GameFactory();

        const selected = gameContext.selectGameStrategy(nadal, djokovic);

        expect(selected).to.be.an.instanceof(AdvantageScoreConcreteStrategy);
    });

    it('should select WIN strategy', () => {
        const nadal = new Player('Nadal', 5);
        const djokovic = new Player('Djokovic', 7);
        const gameContext = new GameFactory();

        const actualScore = gameContext.selectGameStrategy(nadal, djokovic);

        expect(actualScore).to.be.an.instanceof(WinScoreConcreteStrategy);
    });

    it('should select DEUCE strategy', () => {
        const nadal = new Player('Nadal', 3);
        const djokovic = new Player('Djokovic', 3);
        const gameContext = new GameFactory();

        const actual = gameContext.selectGameStrategy(nadal, djokovic);

        expect(actual).to.be.an.instanceof(DeuceScoreConcreteStrategy);
    });
});