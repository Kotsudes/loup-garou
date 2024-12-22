import { Role, ETeams } from "@/gameEngine/roles/player";

export class Angel extends Role {
    constructor() {
        super("Ange");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.SOLO);
    }

    public fallFromGrace() {
        this.player?.setTeam(ETeams.VILLAGER);
    }
}
