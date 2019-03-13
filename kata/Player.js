"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(name, score) {
        if (score === void 0) { score = 0; }
        this.name = name;
    }
    Player.prototype.scores = function () {
        this.score = +1;
        return this;
    };
    return Player;
}());
exports["default"] = Player;
