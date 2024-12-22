import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class Savior extends Role {

    private lastProtectedPlayer: Villager | null = null;
    constructor() {
        super("Salvateur");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public getLastProtectedPlayer(): Villager | null {
        return this.lastProtectedPlayer;
    }

    public protect(player: Villager): void {
        player.addProtection();
        this.lastProtectedPlayer = player;
    }
}
