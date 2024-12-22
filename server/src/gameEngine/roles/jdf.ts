import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class JDF extends Role {

    private charmedPlayers: Villager[] = [];
    constructor() {
        super("Joueur de flûte");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.SOLO);
    }

    public charm(player1: Villager, player2: Villager) {
        this.charmedPlayers.push(player1);
        this.charmedPlayers.push(player2);
    }

    public getCharmedPlayers() {
        return this.charmedPlayers;
    }
}
