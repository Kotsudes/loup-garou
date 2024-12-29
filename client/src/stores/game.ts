import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
    const game = reactive<Game>({
        villageName: "Thiercelieux",
        players: [],
        roles: roles.map(role => ({ quantity: 0, role: role })),
        gameStatus: EGameStatus.LOBBY,
        gamePhase: "day",
        gameDay: 0
    })

    const lobby = ref<Player[]>();

    function updateLobby(players: Player[]) {
        lobby.value = players
    }

    return { game, lobby, updateLobby }
})

export type Game = {
    villageName: string,
    players: Villager[],
    roles: {
        quantity: number,
        role: Role
    }[],
    gameStatus: EGameStatus,
    gamePhase: "day" | "night",
    gameDay: number,
}

export type Player = {
    username: string,
    isReady: boolean,
}

export type Villager = Player & {
    role?: Role,
    isAlive: boolean,
    status : {
        charmed: boolean,
        protected: boolean,
        couple: boolean
    },
    votes: number
}

export type Role = {
    name: string,
    image: string,
    description: string,
    isVariant: boolean
}

export enum EGameStatus {
    LOBBY="pending",
    START="started",
    FINISHED="finished"
}


export const roles : Role[] = [
    {
        name: "Simple Villageois",
        image: "/roles/simple_villageois.png",
        description:
            "Il peut voter durant le jour pour essayer d'éliminer un loup garou",
        isVariant: false
    },
    {
        name: "Simple Villageois conseil",
        image: "/roles/simple_villageois.png",
        description:
            "Il peut voter durant le jour pour essayer d'éliminer un loup garou. Il peut également se concerter une fois le jour dans la partie avec les autres simples villageois pour éliminer un joueur de leur choix",
        isVariant: true
    },
    {
        name: "Loup-Garou",
        image: "/roles/loup_garou.png",
        description:
            "Il peut se réunir la nuit avec les autres loups afin d'éliminer un villagois.",
        isVariant: false
    },
    {
        name: "Chasseur",
        image: "/roles/chasseur.png",
        description: "A sa mort peut tuer un joueur de son choix",
        isVariant: false
    },
    {
        name: "Cupidon",
        image: "/roles/cupidon.png",
        description: "Il peut lier deux destins dans le village",
        isVariant: false
    },
    {
        name: "Petite fille",
        image: "/roles/petite_fille.png",
        description: "Elle peut observer les loups garous la nuit",
        isVariant: false
    },
    {
        name: "Sorcière",
        image: "/roles/sorciere.png",
        description:
            "Une fois par partie, elle peut sauver la victime des loups. Elle peut également éliminer un joueur",
        isVariant: false
    },
    {
        name: "Voleur",
        image: "/roles/voleur.png",
        description: "Il peut changer sa carte avec une autre.",
        isVariant: false
    },
    {
        name: "Voleur variante",
        image: "/roles/voleur.png",
        description: "Il peut changer sa carte avec celle d'un autre joueur.",
        isVariant: true
    },
    {
        name: "Voyante",
        image: "/roles/voyante.png",
        description: "Chaque nuit, elle découvre le rôle d'un joueur",
        isVariant: false
    },
    {
        name: "Voyante bavarde",
        image: "/roles/voyante.png",
        description:
            "Chaque nuit, elle découvre le rôle d'un joueur et révèle le rôle découvert à tout le monde",
        isVariant: true
    },
    {
        name: "Voyante myope",
        image: "/roles/voyante.png",
        description: "Chaque nuit, elle découvre le camp d'un joueur",
        isVariant: true
    },
    {
        name: "Ancien du village",
        image: "/roles/ancien.png",
        description:
            "Il résiste à la première attaque des loups la nuit. S'il est voté par le village le jour, tous les villageois perdent leur pouvoir",
        isVariant: false
    },
    {
        name: "Bouc émissaire",
        image: "/roles/bouc_emissaire.png",
        description:
            "Le bouc émissaire est sacrifié en cas d'égalité durant le vote",
        isVariant: false
    },
    {
        name: "Idiot du village",
        image: "/roles/idiot_du_village.png",
        description:
            "S'il est voté par le village, il est gracié, mais perd son droit de vote",
        isVariant: false
    },
    {
        name: "Joueur de flûte",
        image: "/roles/joueur_de_flute.png",
        description:
            "Chaque nuit, il envoute deux joueurs. Lorsque l'ensemble des joueurs en vie sont envoutés, il gagne la partie",
        isVariant: false
    },
    {
        name: "Salvateur",
        image: "/roles/salvateur.png",
        description:
            "Chaque nuit, il peut protéger un joueur. Il ne peut pas protéger le même joueur deux nuits de suite",
        isVariant: false
    },
    {
        name: "Corbeau",
        image: "/roles/corbeau.png",
        description:
            "Chaque nuit, il peut ajouter 2 votes supplémentaire au joueur de son choix pour le prochain vote.",
        isVariant: false
    },
    {
        name: "Loup blanc",
        image: "/roles/loup_blanc.png",
        description: "Une nuit sur deux, il peut éliminer un loup-garou",
        isVariant: false
    },
    {
        name: "Maire",
        image: "/roles/maire.png",
        description: "Son vote compte pour deux voix",
        isVariant: false
    },
    {
        name: "Maire juge",
        image: "/roles/maire.png",
        description: "En cas d'égalité au vote, le maire tranche",
        isVariant: true
    },
    {
        name: "Ange",
        image: "/roles/ange.png",
        description:
            "Si l'ange se fait éliminer le premier jour par le vote du village, il gagne la partie",
        isVariant: false
    },
    {
        name: "Chien-loup",
        image: "/roles/chien_loup.jpg",
        description:
            "Au début de la partie, il choisit d'être un simple villageois ou un loup-garou",
        isVariant: false
    },
    {
        name: "Enfant sauvage",
        image: "/roles/enfant_sauvage.png",
        description:
            "Au début de la partie, il choisit un modèle. Si ce dernier meurt, il devient un loup garou",
        isVariant: false
    },
    {
        name: "Grand méchant loup",
        image: "/roles/grand_mechant_loup.jpg",
        description:
            "Il peut éliminer un joueur supplémentaire tant qu'aucun loup n'est mort",
        isVariant: false
    },
    {
        name: "Infect père des loups",
        image: "/roles/infect_pere_des_loups.png",
        description:
            "Il peut choisir d'infecter une victime une fois dans la partie",
        isVariant: false
    },
    {
        name: "Montreur d'ours",
        image: "/roles/montreur_ours.png",
        description:
            "Au réveil du village, si au moins un loup lui est adjacent, l'ours grogne",
        isVariant: false
    },
    {
        name: "Montreur d'ours malin",
        image: "/roles/montreur_ours.png",
        description:
            "Au réveil du village, l'ours grogne pour chaque loup adjacent au montreur d'ours",
        isVariant: true
    },
    {
        name: "Renard",
        image: "/roles/renard.png",
        description:
            "Chaque nuit, il peut sentir trois personnes. Si aucune d'elle n'est un loup, il perd son pouvoir",
        isVariant: false
    },
    {
        name: "Renard voisin",
        image: "/roles/renard.png",
        description:
            "Chaque nuit, il peut sentir une personne et ses voisons. Si aucune d'elle n'est un loup, il perd son pouvoir",
        isVariant: true
    },
    {
        name: "Villageois-Villageois",
        image: "/roles/villageois_villageois.png",
        description:
            "Il peut voter le jour et est innocent aux yeux de tous les joueurs.",
        isVariant: false
    },
    {
        name: "Soeurs",
        image: "/roles/soeurs.png",
        description:
            "Elles se connaissent mutuellement et peuvent discuter la nuit",
        isVariant: false
    },
    {
        name: "Frères",
        image: "/roles/freres.jpg",
        description:
            "Ils se connaissent mutuellement et peuvent discuter la nuit",
        isVariant: false
    }
]
