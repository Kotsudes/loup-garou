import { Role, ETeams } from "@/gameEngine/roles/player";

export class VillageElder extends Role {
    constructor() {
        super("Ancien du village");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}
