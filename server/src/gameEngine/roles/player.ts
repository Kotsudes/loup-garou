export class Villager {

    private name: string;
    private role: Role | undefined;
    private voteCount = 0;
    protected team: ETeams | undefined;
    private isAlive = true;
    private protected = 0;
    private partener: Villager | undefined;
    private isMayor = false;
    private hasPlayed = false;

    constructor(pseudo: string) {
        this.name = pseudo;
    }

    public die(): void {
        this.isAlive = false;
    }

    public getRole() {
        return this.role;
    }

    public getName() {
        return this.name;
    }

    public setRole(role: Role) {
        this.role = role;
    }

    public vote(player: Villager) {
        player.addVote();
    }

    public addVote(vote = 1) {
        this.voteCount += vote;
    }

    public promote() {
        this.isMayor = true;
    }

    public transmit(player: Villager) {
        this.isMayor = false;
        player.promote();
    }

    public removeVote() {
        this.voteCount--;
    }

    public getTeam() {
        return this.team
    }

    public setTeam(team: ETeams) {
        this.team = team;
    }

    public getIsAlive() {
        return this.isAlive
    }

    public getVoteCount() {
        return this.voteCount;
    }

    public getPartener() {
        return this.partener;
    }

    public addProtection() {
        this.protected++;
    }

    public resetProtection() {
        this.protected = 0;
    }

    public setPartener(partener: Villager) {
        this.partener = partener;
    }


    public getIsProtected() {
        return this.protected
    }

}

export abstract class Role {
    private name: string;
    protected player: Villager | undefined;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public setPlayer(player: Villager) {
        this.player = player;
    }

    public getPlayer() {
        return this.player;
    }
}


export enum ETeams {
    VILLAGER = "Village",
    WEREWOLF = "Loup",
    SOLO = "Solitaire"
}