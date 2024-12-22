import { Role, ETeams } from "@/gameEngine/roles/player";

export class LittleGirl extends Role {
    constructor() {
        super("Petite Fille");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}
