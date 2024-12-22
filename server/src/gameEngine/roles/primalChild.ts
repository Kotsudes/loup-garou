import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class PrimalChild extends Role {

    private model: Villager | undefined;
    constructor() {
        super("Enfant sauvage");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    public choseModel(player: Villager) {
        this.model = player;
    }

    public switchTeam() {
        this.player?.setTeam(ETeams.WEREWOLF);
    }
}
