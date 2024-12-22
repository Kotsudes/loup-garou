import { Role, ETeams } from "@/gameEngine/roles/player";

export class BearShower extends Role {
    constructor() {
        super("Montreur d'ours");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    growl(growl = 1) {
        throw new Error("Method not implemented.");
    }
}
