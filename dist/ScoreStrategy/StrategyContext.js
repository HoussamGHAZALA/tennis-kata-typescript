"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScoreStrategyContext {
    constructor(scoreStrategy) {
        this.strategies = scoreStrategy;
    }
    perform(first, second) {
        this.strategies.forEach(scoreStrategy => {
            if (scoreStrategy.isApplicable()) {
                this.strategies.getGameResult(first, second);
            }
        });
    }
}
exports.ScoreStrategyContext = ScoreStrategyContext;
//# sourceMappingURL=StrategyContext.js.map