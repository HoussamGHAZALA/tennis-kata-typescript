import Player from "./player";
import {Score} from "./score";

export class ResultByPlayer {

    private score: string;
    private player: Player;

    constructor(score: string, player?: Player) {
        this.score = score;
    }

    get _player(): Player {
        return this.player;
    }
    get _score(): string {
        return this.score;
    }
}
