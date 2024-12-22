import { Villager, Role, ETeams } from "@/gameEngine/roles/player";

export class Werewolf extends Role {
    constructor() {
        super("Loup-Garou");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.WEREWOLF);
    }
}

export class WhiteWolf extends Role {
    constructor() {
        super("Loup blanc");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.SOLO);
    }
}

export class BigBadWolf extends Role {
    constructor() {
        super("Grand méchant loup");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.WEREWOLF);
    }
}

export class InfectedFather extends Role {
    constructor() {
        super("Infect père des loups");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.WEREWOLF);
    }

    public infect(player: Villager) {
        player.addProtection();
        player.setTeam(ETeams.WEREWOLF);
    }
}