import { Role, ETeams } from "@/gameEngine/roles/player";

export class SimpleVillager extends Role {
    constructor() {
        super("Simple Villageois");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}

export class SimpleVillagerAlt extends Role {
    constructor() {
        super("Simple Villageois conseil");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }

    triggerCouncil() {
        throw new Error("Not implemented");
    }
}

export class VillagerVillager extends Role {
    constructor() {
        super("Villageois villageois");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}

export class Sisters extends Role {
    constructor() {
        super("Soeurs");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}

export class Brothers extends Role {
    constructor() {
        super("Frères");
        this.player?.setRole(this);
        this.player?.setTeam(ETeams.VILLAGER);
    }
}