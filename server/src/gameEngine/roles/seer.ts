import { Role, Villager, ETeams } from "@/gameEngine/roles/player";

export class Seer extends Role {
    constructor() {
        super("Voyante");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    seer(player: Villager) {
        player.getRole();
    }
}

export class TalkativeSeer extends Role {
    constructor() {
        super("Voyante bavarde");
        this.player?.setRole(this);
    }

    seer(player: Villager) {
        player.getRole();
    }
}

export class NeersightedSeer extends Role {
    constructor() {
        super("Voyante myope");
        this.player?.setRole(this);
    }

    seer(player: Villager) {
        player.getTeam();
    }
}