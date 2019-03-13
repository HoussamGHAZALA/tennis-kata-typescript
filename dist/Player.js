"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, score = 0) {
        this.name = name;
    }
    get _name() {
        return this.name;
    }
    get _score() {
        return this.score;
    }
    //For each point the system will request
    //to have the winner of the point.
    scores() {
        this.score = +1;
        return this;
    }
}
exports.default = Player;
//# sourceMappingURL=Player.js.map