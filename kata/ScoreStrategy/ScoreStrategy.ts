import {ResultByPlayer} from "../game.result";

export interface ScoreStrategy {
    getGameResult(): ResultByPlayer[];
    isResponsible(): boolean;
}
