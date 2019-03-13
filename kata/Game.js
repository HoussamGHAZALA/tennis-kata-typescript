"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerResult = /** @class */ (function () {
    function PlayerResult(player, ecart) {
        this.player = player;
        this.ecart = ecart;
    }
    return PlayerResult;
}());
var Game = /** @class */ (function () {
    function Game(first, second) {
        this._first = first;
        this._second = second;
    }
    Game.prototype.ifAtLeastThreePointScoredByEachPlayers = function () {
        return this._first.score === this._second.score &&
            this._first.score >= 3;
    };
    Game.prototype.ifAtLeastThreePointScoredByEachPlayersWithEcartOne = function () {
        return this._first.score >= 3 &&
            this._second.score >= 3 &&
            this.buildGameResult().ecart === 1;
    };
    Game.prototype.getScoreBetweenPlayers = function () {
        //If at least three points have been scored by each player,
        //and the scores are equal, the score is “deuce”.
        if (this.ifAtLeastThreePointScoredByEachPlayers()) {
            this._currentScore = Score.DEUCE;
        }
        //If at least three points have been scored by each side
        //and a player has one more point than his opponent
        //the score of the game is “advantage” for the player in the lead.
        if (this.ifAtLeastThreePointScoredByEachPlayersWithEcartOne()) {
            this._currentScore = Score.ADVANTAGE;
        }
        return this._currentScore;
    };
    Game.prototype.buildGameResult = function () {
        var ecart = this._first.score - this._second.score;
        var positiveEcart = Math.abs(ecart);
        if (ecart > 0) {
            return new PlayerResult(this._first, positiveEcart);
        }
        if (ecart < 0) {
            return new PlayerResult(this._second, positiveEcart);
        }
    };
    return Game;
}());
