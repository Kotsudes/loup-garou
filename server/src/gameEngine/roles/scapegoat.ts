import { Role, ETeams } from "@/gameEngine/roles/player";

export class Scapegoat extends Role {
    constructor() {
        super("Bouc émissaire");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}
