import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class Thief extends Role {
    constructor() {
        super("Voleur");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public swapRole(target: Role): void {
        this.player?.setRole(target);
    }
}


export class ThiefAlt extends Role {
    constructor() {
        super("Voleur local");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public swapRole(player: Villager): void {
        throw new Error("Method not implemented.");
    }
}