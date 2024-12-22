import { Role, Villager, ETeams } from "@/gameEngine/roles/player";

export class Hunter extends Role {
    constructor(pseudo: string) {
        super(pseudo);
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    shoot(player: Villager) {
        player.die();
    }
}
