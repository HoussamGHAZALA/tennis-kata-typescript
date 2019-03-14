import Player from "./player";
import { expect } from 'chai';
import 'mocha';
import {Game} from "./game";
import {ResultByPlayer} from "./game.result";
import {Score} from "./score";

describe('game class', () => {

    it('should display the two players result', () => {
        const nadal = new Player('Nadal', 1);
        const djokovic = new Player('Djokovic', 2);
        const game = new Game(nadal, djokovic);

        const actualScore = game.getScoreBetweenPlayers(nadal, djokovic);

        expect(actualScore).to.deep.equal(
            [
                new ResultByPlayer('FIFTEEN', nadal),
                new ResultByPlayer('THIRTY', djokovic)
            ]
        );
    });

    it('should display ADVANTAGE for Nadal', () => {
        const nadal = new Player('Nadal', 5);
        const djokovic = new Player('Djokovic', 4);
        const game = new Game(nadal, djokovic);

        const actualScore = game.getScoreBetweenPlayers(nadal, djokovic);

        expect(actualScore).to.deep.equal(
            [
                new ResultByPlayer('ADVANTAGE', nadal)
            ]
        );
    });

    it('should display WIN for Djokovic', () => {
        const nadal = new Player('Nadal', 5);
        const djokovic = new Player('Djokovic', 7);
        const game = new Game(nadal, djokovic);

        const actualScore = game.getScoreBetweenPlayers(nadal, djokovic);

        expect(actualScore).to.deep.equal(
            [
                new ResultByPlayer('WIN', djokovic)
            ]
        );
    });

    it('should display DEUCE as score', () => {
        const nadal = new Player('Nadal', 3);
        const djokovic = new Player('Djokovic', 3);
        const game = new Game(nadal, djokovic);

        const actualScore = game.getScoreBetweenPlayers(nadal, djokovic);

        expect(actualScore).to.deep.equal(
            [
                new ResultByPlayer('DEUCE')
            ]
        );
    });
});