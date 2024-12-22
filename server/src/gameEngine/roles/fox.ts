import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class Fox extends Role {
    constructor() {
        super("Renard");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public sniff(player1: Villager, player2: Villager, player3: Villager): void {
        if (player1.getTeam() === ETeams.WEREWOLF || player2.getTeam() === ETeams.WEREWOLF || player3.getTeam() === ETeams.WEREWOLF) {
            console.log("Le renard a senti un loup garou");
        }
        else {
            console.log("Le renard n'a rien senti");
        }
    }
}