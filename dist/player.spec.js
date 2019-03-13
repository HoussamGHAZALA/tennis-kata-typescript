"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const chai_1 = require("chai");
require("mocha");
describe('player class', () => {
    it('should a given player scores', () => {
        const player = new player_1.default('Nadal');
        player.scores();
        chai_1.expect(player).to.deep.equal(new player_1.default('Nadal', 1));
    });
});
//# sourceMappingURL=player.spec.js.map