import { Role, Villager, ETeams } from "@/gameEngine/roles/player";

export class Cupid extends Role {
    constructor() {
        super("Cupidon");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    link(player1: Villager, player2: Villager) {
        player1.setPartener(player2);
        player2.setPartener(player1);
    }
}





