import Player from "./player";

export class PlayerByEcart {
    private ecart: number;
    private player?: Player;

    constructor(ecart: number, player?: Player) {
        this.ecart = ecart;
        this.player = player;
    }

    get _ecart():number {
        return this.ecart;
    }

    get _player() {
        return this.player;
    }
}