export default class Player {

    private name: string;
    private score: number;

    constructor(name: string, score: number = 0) {
        this.name = name;
        this.score = score
    }

    get _name(): string {
        return this.name;
    }

    get _score(): number {
        return this.score;
    }

    //For each point the system will request
    //to have the winner of the point.
    public scores() {
        this.score = this.score + 1;
        return this;
    }
}
