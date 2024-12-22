import { Role, ETeams } from "@/gameEngine/roles/player";

export class Idiot extends Role {
    constructor() {
        super("Idiot du village");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}
