import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class Raven extends Role {

    constructor() {
        super("Corbeau");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public curse(player: Villager): void {
        player.addVote(2)
    }
}
