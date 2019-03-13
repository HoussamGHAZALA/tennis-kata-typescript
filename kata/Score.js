"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score;
(function (Score) {
    Score[Score["LOVE"] = 0] = "LOVE";
    Score[Score["FIFTEEN"] = 1] = "FIFTEEN";
    Score[Score["THIRTY"] = 2] = "THIRTY";
    Score[Score["FORTY"] = 3] = "FORTY";
    //If at least three points have been scored by each player,
    //and the scores are equal, the score is “deuce”.
    Score[Score["DEUCE"] = 4] = "DEUCE";
    //If at least three points have been scored by each side and a player
    //has one more point than his opponent,
    //the score of the game is “advantage” for the player in the lead.
    Score[Score["ADVANTAGE"] = 5] = "ADVANTAGE";
    Score[Score["WIN"] = 6] = "WIN";
    Score[Score["LOST"] = 7] = "LOST";
})(Score = exports.Score || (exports.Score = {}));
var individualScores = [
    Score.LOVE,
    Score.FIFTEEN,
    Score.THIRTY,
    Score.FORTY,
];
var otherScores = [
    Score.DEUCE,
    Score.ADVANTAGE,
];
