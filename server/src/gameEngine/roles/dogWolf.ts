import { Role, ETeams } from "@/gameEngine/roles/player";

export class DogWolf extends Role {
    constructor() {
        super("Chien-Loup");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public switchTeam() {
        this.player?.setTeam(ETeams.WEREWOLF);
    }
}
