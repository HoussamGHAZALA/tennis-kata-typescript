import Player from "./player";
import { expect } from 'chai';
import 'mocha';

describe('player class', () => {

    it('should a given player scores', () => {
        const player = new Player('Nadal');

        player.scores();

        expect(player).to.deep.equal(new Player('Nadal', 1));
    });

});