import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class Witch extends Role {
    constructor() {
        super("Sorcière");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public kill(villager: Villager) {
        villager.die();
    }

    public save(villager: Villager) {
        villager.addProtection();
    }
}
